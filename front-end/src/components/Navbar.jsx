import React, { useContext } from 'react';
import AppContext from '../context/Context';

export default function Navbar() {
  const { user } = useContext(AppContext);
  return (
    <nav>
      <button
        type="button"
        data-testid="customer_products_element-navbar-link-products"
      >
        PRODUTOS
      </button>
      <button
        type="button"
        data-testid="customer_products_element-navbar-link-orders"
      >
        MEUS PEDIDOS
      </button>
      <button
        type="button"
        data-testid="customer_products_element-navbar-user-full-name"
      >
        { user }
      </button>
      <a href="/login">
        <button
          type="button"
          data-testid="customer_products_element-navbar-link-logout"
        >
          Sair
        </button>
      </a>
    </nav>
  );
}
