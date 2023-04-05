import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useContext } from 'react';
import Button from './Button';
// import AppContext from '../context/Context';

export default function CustomerProductsNavbar({ name }) {
  const ROUTE = 'customer_products';
  const ORDERS = 'element-navbar-link-orders';
  const USER_FULL_NAME = 'element-navbar-user-full-name';
  const LOGOUT = 'element-navbar-link-logout';

  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('user');

    history.push('/login');
  };

  return (
    <nav>
      <Button
        type="button"
        testId={ `${ROUTE}__${ORDERS}` }
        onClick={ () => { history.push('/seller/orders'); } }
        nameBtn="PEDIDOS"
      />
      <text
        data-testid={ `${ROUTE}__${USER_FULL_NAME}` }
      >
        { name }
      </text>
      <Button
        type="button"
        testId={ `${ROUTE}__${LOGOUT}` }
        nameBtn="Sair"
        onClick={ () => logout() }
      />
    </nav>
  );
}

CustomerProductsNavbar.propTypes = {
  name: PropTypes.string.isRequired,
};
