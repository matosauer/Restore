import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
import { Basket, Item } from "../../app/models/basket";
import { Product } from "../../app/models/product";

function isBasketItem(product: Product | Item): product is Item {
    return (product as Item).quantity !== undefined;
}

export const basketApi = createApi({
    reducerPath: 'basketApi',
    baseQuery: baseQueryWithErrorHandling,    
    tagTypes: ['Basket'],
    endpoints: (builder) => ({
        fetchBasket: builder.query<Basket, void>({
            query: () => 'basket',
            providesTags: ['Basket']
        }),
        addBasketItem: builder.mutation<Basket, { product: Product | Item, quantity: number }>({            
            query: ({ product, quantity }) => 
                {
                    const productId = isBasketItem(product) ? product.productId : product.id;
                    return {
                        url: `basket?productId=${productId}&quantity=${quantity}`,
                        method: 'POST'
                    }
            
                }
            ,
            onQueryStarted: async ({ product, quantity }, { dispatch, queryFulfilled }) => {
                let isNewBasket = false;                
                const patchResult = dispatch(
                    basketApi.util.updateQueryData('fetchBasket', undefined, (draft) => {
                        const productId = isBasketItem(product) ? product.productId : product.id;
                        
                        if(!draft?.basketId) isNewBasket = true;
                        
                        if(!isNewBasket){
                            const existingItem = draft.items.find(item => item.productId === productId);
                            if (existingItem) {
                                existingItem.quantity += quantity;
                            } else {
                                draft.items.push(isBasketItem(product)
                                    ? product : {...product, productId: product.id, quantity});
                            }
                        }

                    })
                )

                try {
                    await queryFulfilled;
                    // Optionally, you can invalidate the basket cache here if needed
                    // This is useful if you want to ensure the basket is always up-to-date
                    //dispatch(basketApi.util.invalidateTags(['Basket']))

                    if(isNewBasket) {
                        // If this is a new basket, we might want to refetch the basket to get the latest state
                        dispatch(basketApi.util.invalidateTags(['Basket']));
                    }

                } catch (error) {
                    console.log(error);
                    patchResult.undo(); // Rollback the optimistic update if the query fails
                }
            }
        }),
        removeBasketItem: builder.mutation<Basket, { productId: number, quantity: number }>({
            query: ({ productId, quantity }) => ({
                url: `basket?productId=${productId}&quantity=${quantity}`,
                method: 'DELETE'
            }),
            onQueryStarted: async ({ productId, quantity }, { dispatch, queryFulfilled }) => {
                const patchResult = dispatch(
                    basketApi.util.updateQueryData('fetchBasket', undefined, (draft) => {
                        const itemIndex = draft.items.findIndex(item => item.productId === productId);
                        if (itemIndex >= 0) {
                            draft.items[itemIndex].quantity -= quantity;
                            if (draft.items[itemIndex].quantity <= 0) {
                                draft.items.splice(itemIndex, 1);
                            }
                        }
                    })
                )

                try {
                    await queryFulfilled;
                    // Optionally, you can invalidate the basket cache here if needed
                    //dispatch(basketApi.util.invalidateTags(['Basket']))
                } catch (error) {
                    console.log(error);
                    patchResult.undo(); // Rollback the optimistic update if the query fails
                }

            }
        })
    })
});

export const {  useFetchBasketQuery, useAddBasketItemMutation, useRemoveBasketItemMutation } = basketApi;
