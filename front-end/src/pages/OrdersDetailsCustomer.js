import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import CustomerOrdersDetails from '../components/CustomerOrdersDetails';
import CustomerOrdersTitle from '../components/CustomerOrdersTitle';
import AppContext from '../context/Context';
import { requestSales, requestSalesProducts, updateSaleStatus } from '../services/api';
import Navbar from '../components/Navbar';

export default function OrdersDetailsCostumer() {
  const [customerProducts, setCustomerProducts] = useState([]);
  const [informations, setInformations] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [statusSale, setStatusSale] = useState('');
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
  }, [id, getProductsSale, statusSale]);

  const updateStatus = async () => {
    setStatusSale('Entregue');
    await updateSaleStatus(id, statusSale);
    return getProductsSale();
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
              seller={ informations?.seller?.name }
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
              disabled={ informations.status !== 'Em Trânsito' }
              testId="customer_order_details__button-delivery-check"
              type="button"
              nameBtn="MARCAR COMO ENTREGUE"
              onClick={ updateStatus }
            />
            <td data-testid={ `${ORDER_ID}-details-label-delivery-status${1}` }>
              {informations.status || statusSale}
            </td>
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
      <div data-testid={ `${ORDER_ID}-total-price` }>
        Valor Total:
        {(Math.round(customerProducts
          .reduce((acc, curr) => Number(acc) + Number(curr.product.price)
          * Number(curr.quantity), 0) * 100) / 100)
          .toFixed(2).replace('.', ',')}
      </div>
    </div>
  );
}
