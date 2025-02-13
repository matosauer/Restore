import { Product } from "../../app/models/product";

type Props = {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props) {
  return (    
    <>
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.id} - {product.name} - {product.price}</li>
            ))}
        </ul>
        <button onClick={addProduct}>Add Product</button>
    </>
  )
}