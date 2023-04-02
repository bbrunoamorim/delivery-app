function AddAddress() {
  const users = localStorage.getItem('user');
  const usersArr = [...users];
  const sellers = usersArr.filter((user) => user.role === 'seller');
  const testidName = 'customer_checkout__';
  return (
    <div>
      <div>
        <p>P. Vendedora Responsável</p>
        <select data-testid={ `${testidName}select-seller` }>
          {sellers.map(({ name, id }) => (
            <option key={ id } value={ id }>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>Endereço</p>
        <input type="text" data-testid={ `${testidName}input-address` } />
      </div>
      <div>
        <p>Número</p>
        <input type="text" data-testid={ `${testidName}input-address-number` } />
      </div>
    </div>
  );
}

export default AddAddress;
