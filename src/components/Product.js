import React, { useState } from 'react';

const Product = ({ id, name, price }) => {
  return (
    <div>
      <hr />
      <h2 className="text-lg font-medium">{name}</h2>
      <h3 className="font-semibold">₹{price}</h3>
      <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-2">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
