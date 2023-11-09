import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Products from './components/Products';
import Productdetails from './components/ProductDetails';
import Cart from './components/Cart';



function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/productdetails' element={<Productdetails/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>
    </div>
  );
}

export default App;
