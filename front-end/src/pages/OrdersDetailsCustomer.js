import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import CustomerOrdersDetails from '../components/CustomerOrdersDetails';
import CustomerOrdersTitle from '../components/CustomerOrdersTitle';
import AppContext from '../context/Context';
import { requestSales, requestSalesProducts } from '../services/api';
import Navbar from '../components/Navbar';

export default function OrdersDetailsCostumer() {
  const [customerProducts, setCustomerProducts] = useState([]);
  const [informations, setInformations] = useState({});
  const [disable, setDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const { valorTotal } = useContext(AppContext);

  const ORDER_ID = 'customer_order_details__element-order';
  const { id } = useParams();

  const getProductsSale = useCallback(async () => {
    const datasetProduct = await requestSalesProducts(id);
    const datasetInformations = await requestSales(id);
    setInformations(datasetInformations);
    setCustomerProducts(datasetProduct);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    getProductsSale();
  }, [id, getProductsSale]);

  const updateStatus = () => {
    setDisable(false);
  };
  return (
    <div>
      <Navbar />
      <table>
        <thead>
          {isLoading ? (
            <p>Carregando...</p>
          ) : (
            <CustomerOrdersTitle
              seller={ informations.seller.name }
              date={ informations.saleDate }
              id={ informations.id }
            />
          )}
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <Button
              disabled={ !disable }
              testId="customer_order_details__button-delivery-check"
              type="button"
              nameBtn="MARCAR COMO ENTREGUE"
              onClick={ updateStatus }
            />
          </tr>
        </thead>
        <tbody>
          {customerProducts.map(
            ({ saleID, quantity, product: { name, price } }, index) => (
              <CustomerOrdersDetails
                key={ saleID }
                index={ index }
                price={ price }
                name={ name }
                quantity={ quantity }
              />
            ),
          )}
        </tbody>
      </table>
      Valor Total:
      <span data-testid={ `${ORDER_ID}-total-price` } />
      { (Math.round(valorTotal * 100) / 100).toFixed(2).replace('.', ',')}
    </div>
  );
}
