import React from 'react';
import '../../index.scss';
import Slider from '../../components/slider/Slider';
import Detail from '../../components/detail/Detail';

const Product = ({cartItems, setCartItems}) => {
  return (
    <div className='product'>
      <Slider />
      <Detail cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  )
}

export default Product
