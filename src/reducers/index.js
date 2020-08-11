import { ADD_TO_CART, UPDATE_CART_ITEM, DELETE_CART_ITEM } from '../action-types';

const initialState = {
  cart: [
    // { id: 1, name: 'Product 1', price: 1299 },
    // { id: 2, name: 'Product 2', price: 2499 },
    // { id: 3, name: 'Product 3', price: 2799 },
    // { id: 4, name: 'Product 4', price: 4299 },
    // { id: 5, name: 'Product 5', price: 4799 },
    // { id: 6, name: 'Product 6', price: 1099 }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, name, price } = action.payload;
      return { ...state, cart: [...state.cart, { id, name, price }] };
    default:
      return state;
  }
};

export default rootReducer;
