import { useState } from "react";

function App() { 

  const [products, setProducts] = useState([
    { id: 1, name: 'product 1', price: 100 },
    { id: 2, name: 'product 2', price: 200 },
    { id: 3, name: 'product 3', price: 300 }
  ]);

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
