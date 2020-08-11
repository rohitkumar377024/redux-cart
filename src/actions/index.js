import {
  ADD_TO_CART,
  INCREMENT_ITEM_QUANTITY,
  DECREMENT_ITEM_QUANTITY,
  DELETE_CART_ITEM
} from '../action-types';

export const addToCart = ({ id, name, price }) => ({
  type: ADD_TO_CART,
  payload: { id, name, price }
});

export const incrementItemQuantity = ({ id }) => ({
  type: INCREMENT_ITEM_QUANTITY,
  payload: { id }
});

export const decrementItemQuantity = ({ id }) => ({
  type: DECREMENT_ITEM_QUANTITY,
  payload: { id }
});

export const deleteCartItem = ({ id }) => ({
  type: DELETE_CART_ITEM,
  payload: { id }
});
