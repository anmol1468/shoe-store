import React, {useState} from 'react';
import '../../index.scss';
import images from '../../imagesExport';
import Right from '../../images/icon-next.svg'
import Left from '../../images/icon-previous.svg'

const Slider = ({big, bigSliderSwitch}) => {
  const [showActive, setShowActive] = useState(2)

  function nextImg () {
    if (showActive!==3) setShowActive(showActive+1)
    else setShowActive(0)    
  }
  function prevImg () {
    if (showActive!==0) setShowActive(showActive-1)
    else setShowActive(3)
  }


  return (
    // code related to big class is in bigSlider.scss
    <div className={`slider ${big? "big" : ''}`}>
      <div className={`slider__show ${big? "big" : ''}`}>
        <button className={`arrow left ${big? "big" : ''}`} onClick={prevImg}><img src={Left} alt="previous" /></button>
        <img src={images.display[showActive]} className='display-img' alt="image" onClick={bigSliderSwitch} />
        <button className={`arrow right ${big? "big" : ''}`} onClick={nextImg}><img src={Right} alt="next" /></button>
      </div>
      <div className={`slider__select ${big? "big" : ''}`}>
        {images.thumbnail.map((image, index) => <img src={image} key={index} className={`select-img ${showActive===index? 'active': ''}`} onClick={() => { setShowActive(index)}} alt="display" />)}
      </div>
    </div>
  )
}

export default Slider
