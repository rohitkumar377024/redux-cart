import React from 'react';
import Quantity from './Quantity';
import { deleteCartItem } from '../actions';
import { connect } from 'react-redux';

const CartItem = ({ id, name, price, quantity, total, deleteCartItem }) => {
  return (
    <div>
      <hr />
      <h2 className="text-lg font-medium">{name}</h2>
      <h3 className="font-semibold">₹{price}</h3>
      <h4 className="font-semibold">{quantity}</h4>
      <h4 className="font-semibold">₹{total}</h4>
      <Quantity id={id} quantity={quantity} />
      <button
        onClick={() => deleteCartItem({ id })}
        className="bg-red-500 hover:bg-red-600 text-white px-8 py-2"
      >
        Delete
      </button>
    </div>
  );
};

export default connect(null, { deleteCartItem })(CartItem);
