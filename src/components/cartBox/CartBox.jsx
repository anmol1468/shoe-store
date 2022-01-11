import React from 'react';
import Button from '../button/Button';
import CartItem from '../cartItem/CartItem';

const CartBox = ({items, setItems}) => {

  const emptyCart = <div className='emptyCart'>Your Cart is empty.</div>

  const cart = <div className='cart'>
    {items.map((item) => {
      return <CartItem items={items} setItems={setItems} quantity={item.n} name={item.item} referance={item.ref} />
    })}
    <Button>Checkout </Button>
  </div>

  const Checkout = <button className='main-button'>Checkout</button>

  return (
    <div className='cartBox'>
      <div className='title'><h3>Cart</h3></div>
      {items.length==0 ? emptyCart: cart}
    </div>
  )
}

export default CartBox
