import { actionsJSON } from '../actions';
import { IAction, State } from '../types';

const initialState: State = { cart: [] };

const reducer = (state = initialState, action: IAction): State => {
  switch (action.type) {
    case actionsJSON.addToCart:
      return {
        cart: [...state.cart, action.payload],
      };
    case actionsJSON.removeFromCart:
      return {
        cart: state.cart.filter((item) => item.id !== action.payload.id), //MUST CHANGE
      };
    default:
      return state;
  }
};

export default reducer;
