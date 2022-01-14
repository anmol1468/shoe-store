import React, { useState } from 'react';
import '../../index.scss';
import Menu from '../../images/icon-menu.svg';
import Close from '../../images/icon-close.svg';
import Logo from '../../images/logo.svg';
// import Cart from '../../images/icon-cart.svg';
import { AiOutlineShoppingCart as Cart } from 'react-icons/ai';
import User from '../../images/image-avatar.png';
import CartBox from '../cartBox/CartBox';

const Navbar = ({cartItems, setCartItems}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  function openCart () {
    setCartOpen(!cartOpen)
  }

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
          {/* <img src={Cart} className='cart' alt="cart-logo" onClick={openCart} /> */}
          {cartItems.length>0 ? <div className='cart-counter'>{cartItems.length}</div> : null}
          <Cart className='cart' onClick={openCart} />
          <CartBox items={cartItems} setItems={setCartItems } cartOpen={cartOpen} />
        </div>
        <img src={User} className='user' alt="user" />
      </div>
    </div>
  )
}

export default Navbar
