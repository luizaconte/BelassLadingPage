import React from 'react';

import Header from './Header';
import Home from './Home';
import Differentials from './Differentials';
import Footer from './Footer';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Differentials />
      <Footer />
    </>
  );
};

export default Dashboard;
