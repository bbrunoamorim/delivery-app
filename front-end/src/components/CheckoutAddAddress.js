import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { api } from '../services/api';

function AddAddress({ addressState, setAddressState }) {
  const [sellers, setSellers] = useState();
  const testidName = 'customer_checkout__';

  useEffect(() => {
    const getSellers = async () => {
      const { data } = await api.get('/checkout/sellers');
      setSellers(data.sellers);
      setAddressState({
        ...addressState,
        sellers: data.sellers[0].id,
      });
    };
    getSellers();
  }, []);

  return (
    <div>
      <div>
        <p>P. Vendedora Responsável</p>
        <select
          data-testid={ `${testidName}select-seller` }
          value={ addressState.sellers }
          onChange={ ({ target }) => setAddressState({
            ...addressState,
            sellers: Number(target.value),
          }) }
        >
          {sellers && sellers.map(({ name, id }) => (
            <option key={ id } value={ id }>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>Endereço</p>
        <input
          type="text"
          data-testid={ `${testidName}input-address` }
          value={ addressState.address }
          onChange={ ({ target }) => setAddressState({
            ...addressState,
            address: target.value,
          }) }
        />
      </div>
      <div>
        <p>Número</p>
        <input
          type="text"
          data-testid={ `${testidName}input-address-number` }
          value={ addressState.number }
          onChange={ ({ target }) => {
            setAddressState({
              ...addressState,
              number: target.value,
            });
          } }
        />
      </div>
    </div>
  );
}

AddAddress.propTypes = {
  addressState: PropTypes.shape({
    sellers: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  setAddressState: PropTypes.func.isRequired,
};

export default AddAddress;
