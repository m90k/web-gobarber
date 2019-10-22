import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import './config/Reactotron';

import history from './services/history';
import ResetCss from './styles/reset';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <ResetCss />
    </Router>
  );
}

export default App;
