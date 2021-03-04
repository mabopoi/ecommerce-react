import Apple from './assets/apple.svg';
import Watermelon from './assets/watermelon.svg';
import Orange from './assets/orange.svg';
import Bananas from './assets/bananas.svg';

import { Product } from './types';

const products: Product[] = [
  {
    id: 1,
    src: Apple,
    productName: 'Apples',
    price: '3 USD each',
  },
  {
    id: 2,
    src: Watermelon,
    productName: 'Watermelons',
    price: '9 USD each',
  },
  {
    id: 3,
    src: Orange,
    productName: 'Oranges',
    price: '8 USD per Kg',
  },
  {
    id: 4,
    src: Bananas,
    productName: 'Bananas',
    price: '1 USD each',
  },
];

export default products;
