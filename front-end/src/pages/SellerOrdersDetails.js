import React, { useContext, useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SubtitleBar from '../components/SubtitleBar';
import ItemOrderDetails from '../components/ItemOrderDetails';
import { requestSales, requestSalesProducts } from '../services/api';
import AppContext from '../context/Context';
import StatusBar from '../components/StatusBar';
import CustomerProductsNavbar from '../components/CustomerProductsNavbar';

export default function SellerOrdersDetails() {
  const history = useHistory();
  const { id } = useParams();
  const ROUTE = 'seller_order_details';
  const TOTAL_PRICE = 'element-order-total-price';
  // const data = [
  //   { name: 'testrestestes', quantity: 10, price: 5 },
  //   { name: 'testrestestes', quantity: 10, price: 5 },
  //   { name: 'testrestestes', quantity: 10, price: 5 },
  // ];

  const [isLoading, setIsLoading] = useState(true);
  const { sales, setSales } = useContext(AppContext);

  const getSalesAndProducts = useCallback(async () => {
    try {
      const orderId = id;
      const dataset = await requestSales(orderId);
      const datasetProduct = await requestSalesProducts(orderId);

      if (!dataset || !datasetProduct) history.push('/seller/orders');

      const newObj = { sale: dataset, saleProducts: datasetProduct };
      setSales(newObj);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [history, id, setSales]);

  useEffect(() => {
    getSalesAndProducts();
  }, [getSalesAndProducts]);

  const nome = 'Lucas';
  console.log(sales);
  return (
    <div>
      <CustomerProductsNavbar name={ nome } />
      <h1>Detalhe do Pedido</h1>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <StatusBar
            order={ sales.sale.id }
            date={ sales.sale.saleDate }
            status={ sales.sale.status }
          />
          <table>
            <SubtitleBar />
            {sales.saleProducts
              .map(({ product: { name }, quantity, product: { price } }, index) => (
                <ItemOrderDetails
                  key={ index }
                  name={ name }
                  quantity={ quantity }
                  price={ price }
                  index={ index }
                />
              ))}
          </table>
          <div>
            <p data-testid={ `${ROUTE}__${TOTAL_PRICE}` }>
              Total:
              {sales.saleProducts
                .reduce((acc, cur) => acc + cur.product.price * cur.quantity, 0)
                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
