import React from 'react';
import { addToCart, incrementItemQuantity } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ cart: state.cart });

const Product = ({ id, name, price, cart, addToCart, incrementItemQuantity }) => {
  return (
    <div>
      <hr />
      <h2 className="text-lg font-medium">{name}</h2>
      <h3 className="font-semibold">₹{price}</h3>
      <button
        onClick={() => {
          const cartItemIds = cart.map(cartItem => cartItem.id);
          if (cartItemIds.includes(id)) {
            incrementItemQuantity({ id });
          } else {
            addToCart({ id, name, price });
          }
        }}
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default connect(mapStateToProps, { addToCart, incrementItemQuantity })(
  Product
);
