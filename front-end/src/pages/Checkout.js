import Table from '../components/Table';
import AddAddress from '../components/AddAddress';

function Checkout() {
  const data = JSON.parse(localStorage.getItem('cartItens'));

  /* // variável temporária apenas para testar
  const data = [
    { name: 'testrestestes', quantity: 10, price: 5 },
    { name: 'testrestestes', quantity: 10, price: 5 },
    { name: 'testrestestes', quantity: 10, price: 5 },
  ]; */

  return (
    <>
      <div>
        <h1>Finalizar Pedido</h1>
        <Table />
        <div data-testid="customer_checkout__element-order-total-price">
          {
            data.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0)
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
      >
        FINALIZAR PEDIDO
      </button>
    </>
  );
}

export default Checkout;
