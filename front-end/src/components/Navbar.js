import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import Button from './Button';
import AppContext from '../context/Context';

export default function Navbar() {
  const { name } = useContext(AppContext);

  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');

    history.push('/login');
  };

  return (
    <nav>
      <Button
        type="button"
        testId="customer_products__element-navbar-link-products"
        nameBtn="PRODUTOS"
      />
      <Button
        type="button"
        testId="customer_products__element-navbar-link-orders"
        nameBtn="MEUS PEDIDOS"
        onClick={ () => history.push('/customer/orders') }
      />
      <Button
        type="button"
        testId="customer_products__element-navbar-user-full-name"
        nameBtn={ name }
      />
      <Button
        type="button"
        testId="customer_products__element-navbar-link-logout"
        nameBtn="Sair"
        onClick={ () => logout() }
      />
    </nav>
  );
}
