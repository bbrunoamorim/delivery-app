import PropTypes from 'prop-types';
import api from '../services/api';

function AddAddress({ selectedSeller, setSelectedSeller }) {
  const [sellers, setSellers] = useState();
  const testidName = 'customer_checkout__';

  useEffect(() => {
    const getSellers = async () => {
      const { data } = await api.get('/checkout/sellers');
      setSellers(data.sellers);
    };
    getSellers();
  }, []);

  return (
    <div>
      <div>
        <p>P. Vendedora Responsável</p>
        <select
          data-testid={ `${testidName}select-seller` }
          value={ selectedSeller }
          onChange={ setSelectedSeller }
        >
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

AddAddress.propTypes = {
  selectedSeller: PropTypes.number.isRequired,
  setSelectedSeller: PropTypes.func.isRequired,
};

export default AddAddress;
