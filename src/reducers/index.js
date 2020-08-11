import {
  ADD_TO_CART,
  INCREMENT_ITEM_QUANTITY,
  DECREMENT_ITEM_QUANTITY,
  DELETE_CART_ITEM
} from '../action-types';

const initialState = {
  cart: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            quantity: 1,
            total: action.payload.price
          }
        ]
      };

    case INCREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cart: [
          ...state.cart.map(cartItem =>
            cartItem.id === action.payload.id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + 1,
                  total: cartItem.total + cartItem.price
                }
              : cartItem
          )
        ]
      };

    case DECREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cart: [
          ...state.cart.map(cartItem =>
            cartItem.id === action.payload.id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
                  total: cartItem.total - cartItem.price
                }
              : cartItem
          )
        ]
      };

    case DELETE_CART_ITEM:
      return {
        ...state,
        cart: [...state.cart.filter(cartItem => cartItem.id !== action.payload.id)]
      };

    default:
      return state;
  }
};

export default rootReducer;
