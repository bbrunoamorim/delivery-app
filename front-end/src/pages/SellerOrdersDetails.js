import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SubtitleBar from '../components/SubtitleBar';
import ItemOrderDetails from '../components/ItemOrderDetails';
import { requestSales, requestSalesProducts, updateSaleStatus } from '../services/api';
import StatusBar from '../components/StatusBar';
import CustomerProductsNavbar from '../components/CustomerProductsNavbar';
import mapStatus from '../services/statusMap';

export default function SellerOrdersDetails() {
  const history = useHistory();
  const { id } = useParams();
  const ROUTE = 'seller_order_details';
  const TOTAL_PRICE = 'element-order-total-price';

  const [isLoading, setIsLoading] = useState(true);
  const [sales, setSales] = useState();
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
  }, [history, id]);

  const handleUpdateStatus = async (status) => {
    await updateSaleStatus(id, mapStatus(status));
    return getSalesAndProducts();
  };

  useEffect(() => {
    getSalesAndProducts();
  }, [id, history, getSalesAndProducts]);

  return (
    <div>
      {isLoading ? (<p>Carregando...</p>) : (
        <CustomerProductsNavbar name={ sales.sale.seller.name } />)}
      <h1>Detalhe do Pedido</h1>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <StatusBar
            updateStatus={ handleUpdateStatus }
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
