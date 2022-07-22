import React from 'react';
import './App.css';
import './styles.css';
import Navbar from "./components/NavBar";
import ItemListContainer  from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart  from './components/Cart';
import CartCustomProvider from './components/context/CartContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

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
          </Routes>
      </CartCustomProvider>
    </BrowserRouter>
    
  );
}

export default App;
