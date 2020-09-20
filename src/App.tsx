import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Routes from './routes/index';

const src: React.FC = () => (
  <Router>
    <Routes />
    <GlobalStyles />
  </Router>
);

export default src;
