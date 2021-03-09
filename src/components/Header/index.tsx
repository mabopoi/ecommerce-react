import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Cart from '../../assets/cart.svg';
import './index.scss';

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <header>
      <img src={Logo} alt='Webpage logo' className='header__logo' />
      <h1>Your place to shop!</h1>
      <button
        type='button'
        className='header__btn'
        onClick={() => history.push('/checkout')}
      >
        Go to checkout
        <img src={Cart} alt='Cart icon' className='header__btnIcon' />
      </button>
    </header>
  );
};

export default Header;
