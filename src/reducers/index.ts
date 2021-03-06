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
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.payload.id) {
          state.cart.splice(i, 1);
          break;
        }
      }
      return {
        cart: [...state.cart],
      };

    default:
      return state;
  }
};

export default reducer;
