import React, { useState } from 'react';
import Product from './Product';

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 1299 },
    { id: 2, name: 'Product 2', price: 2499 },
    { id: 3, name: 'Product 3', price: 1799 }
  ]);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Products List</h1>
      {products.map(product => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
