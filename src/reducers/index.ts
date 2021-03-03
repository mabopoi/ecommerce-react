import { actionsJSON } from '../actions';
import { IAction, State } from '../types';

const initialState: State = { cart: [] };

const reducer = (state = initialState, action: IAction): State => {
  switch (action.type) {
    case actionsJSON.addToCart:
      return {
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
