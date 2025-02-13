import { Fragment } from "react/jsx-runtime";

export default function Catalog(props: any) {
  return (    
    <>
        <ul>
            {props.products.map((product) => (
                <li key={product.id}>
                {product.id} - {product.name} - {product.price}
                </li>
            ))}
        </ul>
        <button onClick={props.addProduct}>Add Product</button>
    </>
  )
}