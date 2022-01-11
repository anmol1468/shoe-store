import React from 'react';
import images from '../../imagesExport';
import {ImBin} from 'react-icons/im';

const CartItem = ({name, quantity, referance, items, setItems}) => {
  function delItem() {
    setItems(items.filter((item) => {
      if (item.ref!==referance) return item
    }))
  }

  return (
    <div className='cartItem'>
      <img src={images.thumbnail[0]} alt="img" className="cartItem__img" />
      <div className="cartItem__description">
        <p>{name}</p>
        <p>{`$125 x ${quantity}`} <span>{`$${125*quantity}`}</span></p>
      </div>
    <ImBin onClick={delItem}/>
    </div>
  )
}

export default CartItem
