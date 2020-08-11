import { ADD_TO_CART, UPDATE_CART_ITEM, DELETE_CART_ITEM } from '../action-types';

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
            price: action.payload.price
          }
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
