import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Checkout from './containers/Checkout';
import Home from './containers/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/checkout' component={Checkout} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
