import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ cart: state.cart });

const Cart = ({ cart }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Cart</h1>
      {cart.map(cartItem => (
        <div>
          <hr />
          <h2 className="text-lg font-medium">{cartItem.name}</h2>
          <h3 className="font-semibold">₹{cartItem.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(Cart);
