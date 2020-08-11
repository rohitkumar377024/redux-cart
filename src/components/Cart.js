import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ cart: state.cart });

const Cart = ({ cart }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Cart</h1>
      {cart.map(cartItem => (
        <CartItem
          key={cartItem.id}
          id={cartItem.id}
          name={cartItem.name}
          price={cartItem.price}
          quantity={cartItem.quantity}
          total={cartItem.total}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(Cart);
