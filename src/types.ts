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
