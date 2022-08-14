import React from 'react';
import './App.css';
import './styles.css';
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import ItemListContainer  from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart  from './components/cart/Cart';
import CartCustomProvider from './components/context/CartContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import CartFinish from './components/cart/CartFinish';

const App = () => {

  return (
    <BrowserRouter>
      <CartCustomProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categories/:type" element={<ItemListContainer/>} />
            <Route path="/categories/:type/:id" element={<ItemDetailContainer/>}/>
            <Route path="/Cart" element={<Cart />}/>
            <Route path="/CartFinish" element={<CartFinish/>}/>
          </Routes>
      </CartCustomProvider>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
