import { FC } from 'react';

export interface Product {
  id: number;
  src: string;
  productName: string;
  price: string;
}

export interface IAction {
  type: string;
  payload: Product;
}

export interface State {
  cart: Product[];
}

export interface Route {
  exact: true;
  path: string;
  component: FC;
}
