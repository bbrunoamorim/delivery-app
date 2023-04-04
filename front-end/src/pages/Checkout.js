import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import Table from '../components/CheckoutTable';
import AddAddress from '../components/CheckoutAddAddress';
import { requestCheckout } from '../services/api';
import AppContext from '../context/Context';

function Checkout() {
  const [selectedSeller, setSelectedSeller] = useState();
  const history = useHistory();
  const { products } = useContext(AppContext);
  const { valorTotal } = useContext(AppContext);

  const handleClickCheckout = async () => {
    const user = localStorage.getItem('user');
    const data = {
      data: {
        products,
        sellerId: selectedSeller,
        token: user.token,
        totalPrice: valorTotal,
      },
    };
    const id = await requestCheckout(data);
    history.push(`/customer/orders/${id}`);
  };

  return (
    <>
      <div>
        <h1>Finalizar Pedido</h1>
        <Table />
        <div data-testid="customer_checkout__element-order-total-price">
          {(Math.round(valorTotal * 100) / 100).toFixed(2).replace('.', ',')}
        </div>
      </div>
      <div>
        <h1>Detalhes e Endereço para Entrega</h1>
        <AddAddress
          selectedSeller={ selectedSeller }
          setSelectedSeller={ setSelectedSeller }
        />
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
