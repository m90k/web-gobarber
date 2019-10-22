import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import Logo from '~/assets/logo.svg';

// import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatorio'),
  email: Yup.string()
    .email('Email Invalido : seuemail@email.com')
    .required('Campo obrigatorio'),
  password: Yup.string()
    .min(8)
    .required('Campo obrigatorio'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={Logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Seu nome completo" />
        <Input type="email" name="email" placeholder="Seu email" />
        <Input type="password" name="password" placeholder="Sua Senha" />
        <button type="submit">Registrar</button>
        <Link to="/">Ja Possuo Conta</Link>
      </Form>
    </>
  );
}
