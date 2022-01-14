import React from 'react';
import '../../index.scss';
import Slider from '../../components/slider/Slider';
import Detail from '../../components/detail/Detail';

const Product = ({cartItems, setCartItems, bigSliderSwitch}) => {
  return (
    <div className='product'>
      <Slider bigSliderSwitch={bigSliderSwitch} />
      <Detail cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  )
}

export default Product
