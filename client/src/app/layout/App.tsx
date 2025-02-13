import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addProduct = () => {
    setProducts(
      prevState =>
      [
        ...prevState,
        { 
          id: (prevState.length + 1), 
          name: 'product ' + (prevState.length + 1), 
          description: 'description',
          price: 400,          
          pictureUrl: 'pictureUrl',
          type: 'type',
          brand: 'brand',
          quantityInStock: 100
        }
      ]
  );
  }

  return (
    <div>
      <h1 style={{color: 'maroon'}}>restore</h1>
      <Catalog products={products} addProduct={addProduct} />
    </div>
  )
}

export default App
