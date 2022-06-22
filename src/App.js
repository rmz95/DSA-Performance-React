import React from 'react';
import './App.css';
import './styles.css';
import Navbar from "./components/NavBar";
import Main from "./components/Main";
import { ItemListContainer } from './components/ItemListContainer';

const App = () => {
  return (
    <div>
    <Navbar>
    </Navbar>
    <ItemListContainer>
    </ItemListContainer>
    </div>
  );
}

export default App;
