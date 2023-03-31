import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';
import AppContext from './Context';

export default function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [btnLogin, setBtnLogin] = useState(true);
  const [btnRegister, setBtnRegister] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [quantityProducts, setQuantityProducts] = useState({});
  const [disableQuantity, setDisableQuantity] = useState(true);
  const [valorTotal, setValorTotal] = useState(0);
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState({});

  const handleInputValue = (id, value) => {
    setInputValue((prevstate) => ({
      ...prevstate,
      [id]: value,
    }));
  };

  const context = useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
      btnLogin,
      setBtnLogin,
      error,
      setError,
      products,
      setProducts,
      sales,
      setSales,
      quantityProducts,
      setQuantityProducts,
      disableQuantity,
      setDisableQuantity,
      valorTotal,
      setValorTotal,
      inputValue,
      setInputValue,
      handleInputValue,
      name,
      setName,
      btnRegister,
      setBtnRegister,
      isLoading,
      setIsLoading,
    }),
    [email, password, btnLogin, error, products, sales,
      quantityProducts, disableQuantity, valorTotal, name, btnRegister, isLoading,
      inputValue,
      setInputValue,
      handleInputValue],
  );
  return <AppContext.Provider value={ context }>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};
