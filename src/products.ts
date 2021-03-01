import Apple from './assets/apple.svg';
import Watermelon from './assets/watermelon.svg';
import Orange from './assets/orange.svg';
import Bananas from './assets/bananas.svg';

import { Product } from './types';

const products: Product[] = [
  {
    src: Apple,
    productName: 'Apples',
    price: '3 USD each',
  },
  {
    src: Watermelon,
    productName: 'Watermelons',
    price: '9 USD each',
  },
  {
    src: Orange,
    productName: 'Oranges',
    price: '8 USD per Kg',
  },
  {
    src: Bananas,
    productName: 'Bananas',
    price: '1 USD each',
  },
];

export default products;
