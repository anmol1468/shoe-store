import React from 'react'
import Slider from '../../components/slider/Slider';
import {ImCross} from 'react-icons/im';

const BigSlider = ({bigSliderSwitch}) => {
  return (
    <div className='bigSlider'>
      <ImCross className='bigSlider__close' onClick={bigSliderSwitch}/>
      <Slider big />
    </div>
  )
}

export default BigSlider
