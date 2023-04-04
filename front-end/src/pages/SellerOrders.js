import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CustomerProductsNavbar from '../components/CustomerProductsNavbar';

export default function SellerOrders() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setIsOrders] = useState([]);

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
  }, [history]);

  useEffect(() => {
    getSalesAndProducts();
  }, [getSalesAndProducts]);

  return (
    <div>
      {isLoading ? (<p>Carregando...</p>) : (
        <CustomerProductsNavbar name={ sales.sale.seller.name } />)}
    </div>
  );
}
