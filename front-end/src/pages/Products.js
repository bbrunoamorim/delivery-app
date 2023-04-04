import { useCallback, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { requestProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import AppContext from '../context/Context';
import Button from '../components/Button';

export default function Products() {
  const { products, setProducts, valorTotal } = useContext(AppContext);
  const history = useHistory();
  const idCustomerProd = 'customer_products__';

  const getProducts = useCallback(async () => {
    const data = await requestProducts();
    setProducts(
      data.map((product) => ({ ...product, quantity: 0, totalValue: 0 })),
    );
  }, [setProducts]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleClickCheckout = () => {
    history.push('/customer/checkout');
  };

  return (
    <div>
      <Navbar />
      {
        products.map(({ id, name, price, urlImage }) => (
          <ProductCard
            key={ id }
            index={ id }
            price={ price }
            urlImage={ urlImage }
            title={ name }
          />
        ))
      }
      <Button
        testId={ `${idCustomerProd}button-cart` }
        disabled={ valorTotal === 0 }
        onClick={ handleClickCheckout }
        nameBtn={
          <p
            data-testid={ `${idCustomerProd}checkout-bottom-value` }
          >
            { `${(Math.round(valorTotal * 100) / 100)
              .toFixed(2).replace('.', ',')}` }

          </p>
        }
      />
    </div>
  );
}
