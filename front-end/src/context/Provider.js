import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';
import AppContext from './Context';

export default function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
    }),
    [email, password],
  );
  return <AppContext.Provider value={ context }>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};
