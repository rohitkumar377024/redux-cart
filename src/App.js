import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="text-gray-800">
      <h1 className="text-4xl font-bold">Redux Cart</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
