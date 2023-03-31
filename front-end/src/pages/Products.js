import { useCallback, useContext, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { requestProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import AppContext from '../context/Context';
import Button from '../components/Button';
// import Button from '../components/Button';

export default function Products() {
  const { products, setProducts, setValorTotal, valorTotal } = useContext(AppContext);
  const history = useHistory();
  const idCustomerProd = 'customer_products_';

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

  // const updateCartValue = () => {
  //   const allProducts = JSON.parse(localStorage.getItem('cart'));
  //   const cartValue = allProducts.reduce(
  //     (acc, { totalValue }) => Number(totalValue) + acc,
  //     0,
  //   );
  //   setValorTotal(cartValue);
  // };

  return (
    <div>
      <Navbar />
      {products.map(({ id, name, price, urlImage }) => (
        <ProductCard
          key={ id }
          index={ id }
          price={ price }
          urlImage={ urlImage }
          title={ name }
        />
      ))}
      <Button
        data-testid={ `${idCustomerProd}button-cart` }
        onClick={ handleClickCheckout }
        nameBtn={ `Ver Carrinho: ${valorTotal.toLocaleString('pt-Br', {
          minimumFractionDigits: 2,
          currency: 'BRL',
          style: 'currency',
        })}` }
      />
    </div>
  );
}
