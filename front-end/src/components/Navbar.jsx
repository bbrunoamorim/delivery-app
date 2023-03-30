import { useHistory } from 'react-router-dom';
import Button from './Button';

export default function Navbar() {
  const username = localStorage.getItem('name');

  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('token');

    history.push('/login');
  };

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
        nameBtn={ username }
      />
      <a href="/login">
        <Button
          type="button"
          data-testid="customer_products_element-navbar-link-logout"
          nameBtn="SAIR"
          onClick={ () => logout() }
        />
      </a>
    </nav>
  );
}
