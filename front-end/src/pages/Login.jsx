/* eslint-disable react/jsx-max-depth */
import React, { useCallback, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  InputLeftElement,
  Flex,
  Stack,
  Heading,
  Checkbox,
  Link,
  Image,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon, ViewIcon } from '@chakra-ui/icons';
import AppContext from '../context/Context';
import { requestLogin } from '../services/api';

function LoginPage() {
  const [show, setShow] = React.useState(false);
  const handleSetShow = () => setShow(!show);

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
    try {
      const { data } = await requestLogin({ email, password });
      await setLocalStorageData();
      if (data.message.role === 'seller') {
        setEmailLoggedIn(data.message.email);
        setUserLogged(data.message.name);
        return history.push('/seller/orders');
      }
      if (data.message.role === 'administrator') {
        history.push('/admin/manage');
        setName('');
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

  const checkIfLoggedIn = useCallback(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setName(user.name);
      setEmail(user.email);
      history.push('/customer/products');
    }
  }, [history, setName, setEmail]);

  useEffect(() => {
    checkIfLoggedIn();

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
  }, [email, password, setBtnLogin, checkIfLoggedIn]);

  const handleClickRegister = () => history.push('/register');

  return (
    <Stack minH="100vh" direction={ { base: 'column', md: 'row' } }>
      <Flex p={ 8 } flex={ 1 } align="center" justify="center">
        <Stack spacing={ 4 } w="full" maxW="md">
          <Heading fontSize="2xl">Faça login em sua conta</Heading>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.400" />
            </InputLeftElement>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              variant="flushed"
              onChange={ handleChangeEmail }
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <LockIcon color="gray.400" />
            </InputLeftElement>
            <Input
              type={ show ? 'text' : 'password' }
              placeholder="Sua senha"
              variant="flushed"
              onChange={ handleChangePassword }
            />
            <InputRightElement>
              <ViewIcon
                onClick={ handleSetShow }
                color="gray.400"
                sx={ { cursor: 'pointer' } }
              />
            </InputRightElement>
          </InputGroup>
          <Stack spacing={ 6 }>
            <Stack
              direction={ { base: 'column', sm: 'row' } }
              align="start"
              justify="space-between"
            >
              <Checkbox>Lembrar de mim</Checkbox>
              <Link color="blue.500" href="/">Esqueceu sua senha?</Link>
            </Stack>
            <Button
              colorScheme="blue"
              variant="solid"
              onClick={ handleClickLogin }
              disabled={ btnLogin }
            >
              Entrar
            </Button>
            <Button variant="solid" onClick={ handleClickRegister }>
              Não possui conta? Registre-se
            </Button>
            {error && (
              <Alert status="error">
                <AlertIcon />
                E-mail ou senha inválidos.
              </Alert>
            )}
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={ 1 }>
        <Image
          alt="Login Image"
          objectFit="cover"
          src="beers.jpg"
        />
      </Flex>
    </Stack>
  );
}

export default LoginPage;
