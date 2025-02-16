import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Button, Container, Typography } from "@mui/material";

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
    <Container>
      <Box display='flex' justifyContent='center' gap={3} margin={3}>
        <Typography variant='h4'>Re-Store</Typography>
        <Button variant="contained" onClick={addProduct}>Add Product</Button>
      </Box>
      <Catalog products={products} />
    </Container>
  )
}

export default App
