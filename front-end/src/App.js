import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import OrderDetails from './pages/OrderDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/orders" component={ OrderDetails } />
    </Switch>
  );
}

export default App;
