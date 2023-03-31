import RowTable from './CheckoutRowTable';

function Table() {
  // const data = JSON.parse(localStorage.getItem('cartItens'));

  // variável temporária apenas para testar
  // const data = [
  //   { name: 'testrestestes', quantity: 10, price: 5 },
  //   { name: 'testrestestes', quantity: 10, price: 5 },
  //   { name: 'testrestestes', quantity: 10, price: 5 },
  // ];

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map(({ name, quantity, price }, index) => (
            <RowTable
              key={ index }
              name={ name }
              quantity={ quantity }
              price={ price }
              index={ index }
            />
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
