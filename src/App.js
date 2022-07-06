import React from 'react';
import './App.css';
import './styles.css';
import Navbar from "./components/NavBar";
import ItemListContainer  from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { Cart } from './components/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Item from './components/Item';

const App = () => {

  return (
    <BrowserRouter>
    <Navbar>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categories/:categoria:type" element={<ItemListContainer/>} />
        <Route path="/product/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </Navbar>
    </BrowserRouter>
    
  );
}

export default App;
