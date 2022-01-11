import React, {useState} from 'react';
import {AiOutlineShoppingCart as Cart } from 'react-icons/ai';

const Detail = ({cartItems, setCartItems}) => {
  const [count, setCount] = useState(0)

  function increment () {setCount(count+1)}
  function decrement () {if (count>0) setCount(count-1)}

  function addItems () {
    if (count===0) return

    if (cartItems.length>0) {
      setCartItems([...cartItems, {item:'Fall Limited Sneakers', n:count, ref:Math.random()}])
    } else {
      setCartItems([{item:'Fall Limited Sneakers', n:count, ref:Math.random()}])
    }
    
    setCount(0)
  }

  return (
    <div className='detail'>
      <h3>SNEAKER COMPANY</h3>      
      <h2>Fall Limited Edition Sneakers</h2>
      <p>These low-profile sneakers are perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        <div className="detail__price">
          <h3>$125.00 <span>50%</span></h3>
          <p>$250</p>
        </div>
        <div className="detail__order">
          <div>
            <button className='decrement' onClick={decrement}>-</button>
            <h4>{count}</h4>
            <button className='increment' onClick={increment}>+</button>
          </div>
          <button onClick={addItems} ><Cart />  Add to Cart</button>
        </div>
      </p>
    </div>
  )
}

export default Detail
