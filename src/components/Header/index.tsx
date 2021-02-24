import React from 'react';
import Logo from '../../assets/logo.svg';
import './index.scss';

const Header: React.FC = () => {
  return (
    <header>
      <img src={Logo} alt='Webpage logo' />
      <h1>Your place to shop!</h1>
      <button>Go to checkout</button>
    </header>
  );
};

export default Header;
