import React from 'react';
import Button from '../button/Button';
import CartItem from '../cartItem/CartItem';

const CartBox = ({items, setItems, cartOpen}) => {

  const emptyCart = <div className='emptyCart'>Your Cart is empty.</div>

  const cart = <div className='cart-inside'>
    {items.map((item) => {
      return <CartItem items={items} setItems={setItems} quantity={item.n} name={item.item} referance={item.ref} />
    })}
  </div>

  const Checkout = <button className='main-button'>Checkout</button>

  return (
    <div className='cartBox scale-up-center'  style={{display: `${cartOpen? "initial": "none"}`}}  >
      <div className='title'><h3>Cart</h3></div>
      {items.length==0 ? emptyCart: cart}
      {items.length!=0 ? <Button>Checkout </Button>: null}
    </div>
  )
}

export default CartBox
