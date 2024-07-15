import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';
import { data as dataArray } from '../utils/data'; // Assuming the data is imported from a data file

const initialState = {
  items: dataArray,
  cart: [],
};

const swipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default swipeReducer;
