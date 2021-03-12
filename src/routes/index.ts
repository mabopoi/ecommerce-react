import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import { Route } from '../types';

const routes: Route[] = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/checkout',
    component: Checkout,
  },
];

export default routes;
