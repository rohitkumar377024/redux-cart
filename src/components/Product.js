import React from 'react';
import { addToCart } from '../actions';
import { connect } from 'react-redux';

const Product = ({ id, name, price, addToCart }) => {
  return (
    <div>
      <hr />
      <h2 className="text-lg font-medium">{name}</h2>
      <h3 className="font-semibold">₹{price}</h3>
      <button
        onClick={() => addToCart({ id, name, price })}
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default connect(null, { addToCart })(Product);
