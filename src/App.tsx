import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />

        <Routes />

        <ToastContainer autoClose={4000} />
      </BrowserRouter>
    </>
  );
};

export default App;
