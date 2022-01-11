import React from 'react'
import Slider from '../../components/slider/Slider';
import {ImCross} from 'react-icons/im';

const BigSlider = () => {
  return (
    <div className='bigSlider'>
      <ImCross />
      <Slider big />
    </div>
  )
}

export default BigSlider
