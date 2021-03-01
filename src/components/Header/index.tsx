import React from 'react';
import Logo from '../../assets/logo.svg';
import Cart from '../../assets/cart.svg';
import './index.scss';

const Header: React.FC = () => {
  return (
    <header>
      <img src={Logo} alt='Webpage logo' className='header__logo' />
      <h1>Your place to shop!</h1>
      <button type='button' className='header__btn'>
        Go to checkout
        <img src={Cart} alt='Cart icon' className='header__btnIcon' />
      </button>
    </header>
  );
};

export default Header;
