import RowTable from './CheckoutRowTable';

function Table() {
  const selectedProducts = JSON.parse(localStorage.getItem('cart'));
  const finalProducts = selectedProducts.filter(({ quantity }) => quantity > 0);

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
        {finalProducts.map(({ name, quantity, price, id }, index) => (
          <RowTable
            key={index}
            name={name}
            quantity={quantity}
            price={price}
            index={index}
            id={id}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
