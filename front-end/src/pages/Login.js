import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/Context';
import Input from '../components/Input';
import Button from '../components/Button';
import { requestLogin } from '../services/api';

function LoginPage() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    btnLogin,
    setBtnLogin,
    error,
    setError,
    setName,
    setEmailLoggedIn,
    setUserLogged,
  } = useContext(AppContext);
  const history = useHistory();

  const LOGIN = 'common_login';
  const idEmail = 'input-email';
  const idPassword = 'input-password';
  const idBtnLogin = 'button-login';
  const idBtnRegister = 'button-register';
  const idEmailInvalid = 'element-invalid-email';

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  const setLocalStorageData = async () => {
    try {
      const {
        data: {
          message: { name, role, token },
        },
      } = await requestLogin({ email, password });

      const user = { name, email, role, token };
      localStorage.setItem('user', JSON.stringify(user));

      setName(name);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickLogin = async () => {
    // const token = JSON.parse(localStorage.getItem('user').token);
    try {
      const { data } = await requestLogin({ email, password });
      await setLocalStorageData();
      if (data.message.role === 'seller') {
        setEmailLoggedIn(data.message.email);
        setUserLogged(data.message.name);
        return history.push('/seller/orders/');
      }
      if (data.message.role === 'administrator') {
        history.push('/admin/manage');
        setEmail('');
        setPassword('');
      } else if (data.message !== 'Not found' && data.message.token) {
        history.push('/customer/products');
      } else {
        console.error('A resposta do servidor está vazia.');
      }
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    const verifyLogin = () => {
      const regex = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
      const MIN_LENGTH = 5;
      return regex.test(email) && password.length > MIN_LENGTH;
    };
    if (verifyLogin()) {
      setBtnLogin(false);
    } else {
      setBtnLogin(true);
    }
  }, [email, password, setBtnLogin]);

  const handleClickRegister = () => history.push('/register');
  return (
    <div>
      <h1>Login</h1>
      <form>
        E-mail:
        <Input
          type="email"
          value={ email }
          onChange={ handleChangeEmail }
          testId={ `${LOGIN}__${idEmail}` }
        />
        Password:
        <Input
          testId={ `${LOGIN}__${idPassword}` }
          type="password"
          value={ password }
          onChange={ handleChangePassword }
        />
        <Button
          type="submit"
          testId={ `${LOGIN}__${idBtnLogin}` }
          disabled={ btnLogin }
          nameBtn="Login"
          onClick={ handleClickLogin }
        />
        <Button
          type="submit"
          testId={ `${LOGIN}__${idBtnRegister}` }
          nameBtn="Register"
          onClick={ handleClickRegister }
        />
      </form>
      <div data-testid={ `${LOGIN}__${idEmailInvalid}` }>
        {error && <p> Email or password incorrect. </p>}
      </div>
    </div>
  );
}

export default LoginPage;
