import React, {useState} from 'react';
import './index.scss';
import Navbar from './components/navbar/Navbar';
import Product from './containers/Product/Product';
import BigSlider from './containers/bigSlider/BigSlider';

function App() {
  const [bigSlider, setBigslider] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  function bigSliderSwitch () {
    setBigslider(!bigSlider)
  }

  return (
    <div className="App">
      {bigSlider && <BigSlider bigSliderSwitch={bigSliderSwitch} />}
      <Navbar cartItems={cartItems} setCartItems={setCartItems} bigSliderSwitch={bigSliderSwitch} />
      <Product cartItems={cartItems} setCartItems={setCartItems} bigSliderSwitch={bigSliderSwitch} />
    </div>
  );
}

export default App;
