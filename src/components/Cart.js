import React from 'react';
import { deleteCartItem } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ cart: state.cart });

const Cart = ({ cart, deleteCartItem }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Cart</h1>
      {cart.map(cartItem => (
        <div>
          <hr />
          <h2 className="text-lg font-medium">{cartItem.name}</h2>
          <h3 className="font-semibold">₹{cartItem.price}</h3>
          <button
            onClick={() => deleteCartItem({ id: cartItem.id })}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, { deleteCartItem })(Cart);
