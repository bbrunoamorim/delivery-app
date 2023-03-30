import { useCallback, useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { requestProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import AppContext from '../context/Context';

export default function Products() {
  const { products, setProducts } = useContext(AppContext);

  const getProducts = useCallback(async () => {
    const data = await requestProducts();
    setProducts(data);
  }, [setProducts]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  console.log(products);
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
            cartPrice={ 0 }
          />
        ))
      }
    </div>
  );
}
