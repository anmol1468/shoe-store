import React, { useState } from 'react';
import '../../index.scss';
import Menu from '../../images/icon-menu.svg';
import Close from '../../images/icon-close.svg';
import Logo from '../../images/logo.svg';
import Cart from '../../images/icon-cart.svg';
import User from '../../images/image-avatar.png';
import CartBox from '../cartBox/CartBox';

const Navbar = ({cartItems, setCartItems}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu () {
    setMenuOpen(!menuOpen)
  }

  const linkBox = <ul className="linkBox-r">
          <li className='linkBox-r__item'><a href="#" >Collections</a></li>
          <li className='linkBox-r__item'><a href="#" >Men</a></li>
          <li className='linkBox-r__item'><a href="#" >Women</a></li>
          <li className='linkBox-r__item'><a href="#" >About</a></li>
          <li className='linkBox-r__item'><a href="#" >Contact</a></li>
        </ul>;

  return (
    <div className='navbar'>
      <div className="linkBox-r-container" style={{left: menuOpen ? '0' : "-100%"}}>
      <ul className="linkBox-r">
          <img src={Close} onClick={openMenu} className='close' alt="closeMenu" />
          <li className='linkBox-r__item'><a href="#" >Collections</a></li>
          <li className='linkBox-r__item'><a href="#" >Men</a></li>
          <li className='linkBox-r__item'><a href="#" >Women</a></li>
          <li className='linkBox-r__item'><a href="#" >About</a></li>
          <li className='linkBox-r__item'><a href="#" >Contact</a></li>
        </ul>
        </div>
      <div className="navbar__box1">
        <img src={Menu} onClick={openMenu} className='open' alt="menu-open" />
        <img src={Logo} className='logo' alt="sneakers-logo" />
        <ul className="linkBox">
          <li className='linkBox__item'><a href="#" >Collections</a></li>
          <li className='linkBox__item'><a href="#" >Men</a></li>
          <li className='linkBox__item'><a href="#" >Women</a></li>
          <li className='linkBox__item'><a href="#" >About</a></li>
          <li className='linkBox__item'><a href="#" >Contact</a></li>
        </ul>
      </div>
      <div className="navbar__box2">
        <div className='cartContainer'>
          <img src={Cart} className='cart' alt="cart-logo" />
          <CartBox items={cartItems} setItems={setCartItems} />
        </div>
        
        <img src={User} className='user' alt="user" />
      </div>
    </div>
  )
}

export default Navbar
