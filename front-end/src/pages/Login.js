import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import AppContext from '../context/Context';
import Input from '../components/Input';
import Button from '../components/Button';
import { requestLogin } from '../services/api';

function LoginPage() {
  const { email, setEmail, password, setPassword,
    btnLogin, setBtnLogin, error, setError } = useContext(AppContext);

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

  const handleClickLogin = async () => {
    try {
      await requestLogin(email, password);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    const verifyLogin = () => {
      const regex = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
      const MIN_LENGTH = 5;
      return (regex.test(email) && password.length > MIN_LENGTH);
    };
    if (verifyLogin()) {
      setBtnLogin(false);
    } else {
      setBtnLogin(true);
    }
  }, [email, password, setBtnLogin]);

  const handleClickRegister = () => <Redirect to="/register" />;
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
      <div
        data-testid={ `${LOGIN}__${idEmailInvalid}` }
      >
        {error && <text> Email or password incorrect. </text>}
      </div>
    </div>
  );
}

export default LoginPage;
