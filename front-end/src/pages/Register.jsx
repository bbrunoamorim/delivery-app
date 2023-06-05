import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import AppContext from '../context/Context';
import { requestCreateUsers } from '../services/api';

function Register() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    name,
    setName,
    btnRegister,
    setBtnRegister,
  } = useContext(AppContext);

  const history = useHistory();

  const REGISTER = 'common_register';
  const idName = 'input-name';
  const idEmail = 'input-email';
  const idPassword = 'input-password';
  const idBtnRegister = 'button-register';
  const idElementInvalid = 'element-invalid_register';

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handleChangeName = ({ target }) => {
    setName(target.value);
  };

  const handleClickRegister = async () => {
    const status = 409;
    const create = await requestCreateUsers({ name, email, password });
    if (create.type !== status) {
      history.push('/customer/products');
    }
    setError(true);
  };

  useEffect(() => {
    const verifyRegister = () => {
      const regex = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
      const MIN_LENGTH = 5;
      const MIN_LENG_NAME = 11;
      return (regex.test(email)
        && password.length > MIN_LENGTH && name.length > MIN_LENG_NAME);
    };
    if (verifyRegister()) {
      setBtnRegister(false);
    } else {
      setBtnRegister(true);
    }
  }, [email, password, setBtnRegister, name]);

  return (
    <div>
      <h1>Register</h1>
      <form>
        Nome:
        <Input
          type="nome"
          value={ name }
          onChange={ handleChangeName }
          testId={ `${REGISTER}__${idName}` }
        />
        E-mail:
        <Input
          type="email"
          value={ email }
          onChange={ handleChangeEmail }
          testId={ `${REGISTER}__${idEmail}` }
        />
        Password:
        <Input
          testId={ `${REGISTER}__${idPassword}` }
          type="password"
          value={ password }
          onChange={ handleChangePassword }
        />
        <Button
          type="submit"
          testId={ `${REGISTER}__${idBtnRegister}` }
          disabled={ btnRegister }
          nameBtn="Register"
          onClick={ handleClickRegister }

        />
      </form>
      <div
        data-testid={ `${REGISTER}__${idElementInvalid}` }
      >
        {error && <p> Usuário já existe. </p>}
      </div>
    </div>
  );
}

export default Register;
