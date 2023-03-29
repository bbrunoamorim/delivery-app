import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';
import AppContext from './myContext';

export default function Provider({ children }) {
  const [user, setUser] = useState('');

  const context = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user],
  );
  return <AppContext.Provider value={ context }>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};
