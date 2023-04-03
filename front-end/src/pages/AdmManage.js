import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import AppContext from '../context/Context';
import { requestCreateUsers } from '../services/api';

function AdmManage() {
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

  const ADMIN = 'admin_manage';
  const idName = 'input-name';
  const idEmail = 'input-email';
  const idPassword = 'input-password';
  const idBtnRegister = 'button-register';
  // const idElementInvalid = 'element-invalid_register';
  // const idRole = 'select-role';
  const idCustomerProducts = 'customer_products';
  const idElementNavBarLinkOrders = 'element-navbar-link-orders';
  const idElementNavBarUserFullName = 'element-navbar-user-full-name';

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
    console.log(create);
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
      <h1>Cadastrando um novo usuário</h1>
      <nav>
        <Button
          href="gerenciar"
          type="nav"
          value="nav"
          testId={ `${idCustomerProducts} __${idElementNavBarLinkOrders}` }
          nameBtn="Grenciar Usuarios"
        />
        <Button
          href="sair"
          type="nav"
          value="nav"
          testId={ `${idCustomerProducts}__${idElementNavBarUserFullName}` }
          nameBtn="Sair"
        />
      </nav>
      <form>
        Nome:
        <Input
          type="nome"
          value={ name }
          onChange={ handleChangeName }
          testId={ `${ADMIN}__${idName}` }
        />
        E-mail:
        <Input
          type="email"
          value={ email }
          onChange={ handleChangeEmail }
          testId={ `${ADMIN}__${idEmail}` }
        />
        Password:
        <Input
          testId={ `${ADMIN}__${idPassword}` }
          type="password"
          value={ password }
          onChange={ handleChangePassword }
        />
        Role:
        <select
          data-testid="admin_manage__select-role"
          type="select"
          defaultValue="administrator"
        >
          <option value="administrator">administrator</option>
          <option value="seller">seller</option>
        </select>

        <Button
          type="submit"
          testId={ `${ADMIN}__${idBtnRegister}` }
          disabled={ btnRegister }
          nameBtn="Register"
          onClick={ handleClickRegister }

        />
      </form>
      <div>
        {error && <p> Usuário já existe. </p>}
      </div>
    </div>
  );
}

export default AdmManage;
