import { IAction, Product } from '../types';

export const actionsJSON = {
  addToCart: 'ADD_TO_CART',
  removeFromCart: 'REMOVE_FROM_CART',
};

export const addToCart = (payload: Product): IAction => ({
  payload,
  type: actionsJSON.addToCart,
});

export const removeFromCart = (payload: Product): IAction => ({
  payload,
  type: actionsJSON.removeFromCart,
});
