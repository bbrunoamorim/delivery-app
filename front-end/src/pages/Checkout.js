import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import Table from '../components/CheckoutTable';
import AddAddress from '../components/CheckoutAddAddress';
import { requestCheckout } from '../services/api';
import AppContext from '../context/Context';
import Navbar from '../components/Navbar';

function Checkout() {
  const [addressState, setAddressState] = useState({
    address: '',
    number: 0,
    sellers: 0,
  });
  const history = useHistory();
  const { valorTotal } = useContext(AppContext);

  const handleClickCheckout = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const cart = JSON.parse(localStorage.getItem('cart'));
    const data = {
      data: {
        products: cart,
        sellerId: addressState.sellers,
        deliveryAddress: addressState.address,
        deliveryNumber: addressState.number,
        token: user.token,
        totalPrice: valorTotal,
      },
    };
    const id = await requestCheckout(data, user.token);
    history.push(`/customer/orders/${id}`);
  };

  return (
    <>
      <div>
        <Navbar />
        <h1>Finalizar Pedido</h1>
        <Table />
        <div data-testid="customer_checkout__element-order-total-price">
          {(Math.round(valorTotal * 100) / 100).toFixed(2).replace('.', ',')}
        </div>
      </div>
      <div>
        <h1>Detalhes e Endereço para Entrega</h1>
        <AddAddress
          addressState={ addressState }
          setAddressState={ setAddressState }
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
