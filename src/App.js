import './App.css';
import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import VendingMachine from './VendingMachine';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">

      <VendingMachine/>

     
    </div>
  );
}

export default App;
