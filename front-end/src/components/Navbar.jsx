import React, { useContext } from 'react';
import AppContext from '../context/Context';
import Button from './Button';

export default function Navbar() {
  const { user } = useContext(AppContext);
  return (
    <nav>
      <Button
        type="button"
        data-testid="customer_products_element-navbar-link-products"
        nameBtn="PRODUTO"
      />
      <Button
        type="button"
        data-testid="customer_products_element-navbar-link-orders"
        nameBtn="MEUS PEDIDOS"
      />
      <Button
        type="button"
        data-testid="customer_products_element-navbar-user-full-name"
        nameBtn={ user }
      />
      <a href="/login">
        <Button
          type="button"
          data-testid="customer_products_element-navbar-link-logout"
          nameBtn="SAIR"
        />
      </a>
    </nav>
  );
}
