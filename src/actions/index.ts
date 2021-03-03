import { IAction, Product } from '../types';

export const actionsJSON = {
  addToCart: 'ADD_TO_CART',
};

export const addToCart = (payload: Product): IAction => ({
  payload,
  type: actionsJSON.addToCart,
});
