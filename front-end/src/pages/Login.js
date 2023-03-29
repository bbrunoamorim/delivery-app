import React, { useContext } from 'react';
import AppContext from '../context/Context';
import Input from '../components/Input';
import Button from '../components/Button';

function LoginPage() {
  const { email, setEmail, password, setPassword } = useContext(AppContext);

  function handleLogin(e) {
    e.preventDefault();
  }
  const LOGIN = 'customer_products';
  const inputEmail = 'input-email';
  const inputPassword = 'input-password';
  const btnLogin = 'button-login';

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={ handleLogin }>
        E-mail:
        <Input
          type="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          testId={ `${LOGIN}__${inputEmail}` }
        />
        Senha:
        <Input
          testId={ `${LOGIN}__${inputPassword}` }
          type="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <Button
          type="submit"
          testId={ `${LOGIN}__${btnLogin}` }
          // onClick={ handleLogin }
        >
          Entrar
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
