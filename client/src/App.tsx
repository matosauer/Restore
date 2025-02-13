import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState<{id: number, name: string, price: number}[]>([]);

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
        { id: (prevState.length + 1), name: 'product ' + (prevState.length + 1), price: 400 }
      ]
  );
  }

  return (
    <div>
      <h1 style={{color: 'maroon'}}>restore</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.id} - {product.name} - {product.price}
          </li>
        ))}
      </ul>

      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default App
