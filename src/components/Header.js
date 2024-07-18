import React from 'react';
import '../App.css';
import logo from '../imgs/logo.svg'

function Header() {
  return (
    <header className="header">
      <img src = {logo} alt='logo'></img>
    </header>
  );
}

export default Header;
