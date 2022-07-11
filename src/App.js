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

const App = () => {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categories/:categoria" element={<ItemListContainer/>} />
        <Route path="/categories/:categoria:type/:id" element={<ItemDetailContainer/>}/>
        <Route path="/Cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
