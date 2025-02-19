import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Product } from "../../app/models/product";

export default function ProductDetail() {

  const {id} = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(()=>{
    fetch(`https://localhost:5001/api/products/${id}`)
          .then(response => response.json())
          .then(data => setProduct(data))
          .catch(error => console.log(error))
  }, [id])


  return (
    <div>{product?.name}</div>
  )
}