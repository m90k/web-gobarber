import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  *{
    margin:  0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  *:focus{
    outline: 0;
  }

  html,
  body,
  #root{
    height: 100vh;
  }

  body{
    -webkit-font-smoothing: antialiased !important;
  }

  body,
  input,
  button{
    font-size: 1em;
    font-family: 'Roboto', sans-serif;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }
`;
