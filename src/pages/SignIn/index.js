import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '~/assets/logo.svg';
import { Form, Input } from '@rocketseat/unform';

// import { Container } from './styles';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={Logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Seu email" />
        <Input type="password" name="password" placeholder="Sua Senha" />
        <button type="submit">Acessar</button>
        <Link to="/registrar">Criar Conta</Link>
      </Form>
    </>
  );
}
