import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import SellerOrdersDetails from './pages/SellerOrdersDetails';
import AdmManage from './pages/AdmManage';
import CustomerOrders from './pages/CustomerOrders';
import OrdersDetailsCostumer from './pages/OrdersDetailsCustomer';
import SellerOrders from './pages/SellerOrders';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/admin/manage" component={ AdmManage } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders" component={ CustomerOrders } />
      <Route exact path="/seller/orders/" component={ SellerOrders } />
      <Route exact path="/seller/orders/:id" component={ SellerOrdersDetails } />
      <Route exact path="/customer/orders/:id" component={ OrdersDetailsCostumer } />
      <Route exact path="/admin/manage" component={ AdmManage } />
    </Switch>
  );
}

export default App;
