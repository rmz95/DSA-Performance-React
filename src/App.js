import React from 'react';
import './App.css';
import './styles.css';
import Navbar from "./components/NavBar";
import ItemListContainer  from './components/ItemListContainer';

const App = () => {
  return (
    <>
    <Navbar>
    </Navbar>
    <main>
    <ItemListContainer>
    </ItemListContainer>
    </main>
    </>
  );
}

export default App;
