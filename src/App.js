import React, {useState} from 'react';
import './index.scss';
import Navbar from './components/navbar/Navbar';
import Product from './containers/Product/Product';
import BigSlider from './containers/bigSlider/BigSlider';

function App() {
  const [bigSlider, setBigslider] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      {bigSlider && <BigSlider />}
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <Product cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  );
}

export default App;
