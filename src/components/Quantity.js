import React from 'react';
import {
  incrementItemQuantity,
  decrementItemQuantity,
  deleteCartItem
} from '../actions';
import { connect } from 'react-redux';

const Quantity = ({
  id,
  quantity,
  incrementItemQuantity,
  decrementItemQuantity,
  deleteCartItem
}) => {
  return (
    <div>
      <button
        onClick={() => incrementItemQuantity({ id })}
        className="border-2 border-green-400 text-green-400 rounded-full font-black px-6 py-2"
      >
        +
      </button>

      <button
        onClick={() => {
          if (quantity === 1) {
            deleteCartItem({ id });
          } else {
            decrementItemQuantity({ id });
          }
        }}
        className="border-2 border-red-400 text-red-400 rounded-full font-black px-6 py-2"
      >
        -
      </button>
    </div>
  );
};

export default connect(null, {
  incrementItemQuantity,
  decrementItemQuantity,
  deleteCartItem
})(Quantity);
