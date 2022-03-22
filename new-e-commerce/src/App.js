import Navbar from './components/Styles/Nav';
import Button from 'react-bootstrap/Button';
import './App.css';
import Main from './components/Styles/Main';
import Basket from './components/Styles/Basket';
import data from './Data';
import { useState } from 'react';
import Product from './components/Styles/Product';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty +1} : x))
    }
    else{
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }
  return (
    <div className="App">
      <Navbar />
      <div className='row'>
        <Main products={products} /> 
        <Basket cartItems={cartItems} />
      </div>
      
    </div>
  );
}

export default App;
