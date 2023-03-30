import { useHistory } from 'react-router-dom';
import Table from '../components/CheckoutTable';
import AddAddress from '../components/CheckoutAddAddress';
import { requestCheckout } from '../services/api';

function Checkout() {
  const history = useHistory();
  const products = JSON.parse(localStorage.getItem('cartItens'));

  /* // variável temporária apenas para testar
  const data = [
    { name: 'testrestestes', quantity: 10, price: 5 },
    { name: 'testrestestes', quantity: 10, price: 5 },
    { name: 'testrestestes', quantity: 10, price: 5 },
  ]; */

  const handleClickCheckout = () => {
    const data = {
      data: {
        products,
      },
    };
    requestCheckout(data);
    history.push('/register');
  };

  return (
    <>
      <div>
        <h1>Finalizar Pedido</h1>
        <Table />
        <div data-testid="customer_checkout__element-order-total-price">
          {
            products.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0)
          }
        </div>
      </div>
      <div>
        <h1>Detalhes e Endereço para Entrega</h1>
        <AddAddress />
      </div>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleClickCheckout }
      >
        FINALIZAR PEDIDO
      </button>
    </>
  );
}

export default Checkout;
