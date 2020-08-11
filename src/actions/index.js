import { ADD_TO_CART, UPDATE_CART_ITEM, DELETE_CART_ITEM } from '../action-types';

export const addToCart = ({ id, name, price }) => ({
  type: ADD_TO_CART,
  payload: { id, name, price }
});

export const updateCartItem = ({ id, name, price }) => ({
  type: UPDATE_CART_ITEM,
  payload: { id, name, price }
});

export const deleteCartItem = ({ id }) => ({
  type: DELETE_CART_ITEM,
  payload: { id }
});
