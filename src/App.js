import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Header } from './components/Header';
import { Cart } from "./pages/Cart";
import { Photos } from "./pages/Photos";

function App () {
  return (
    <div className="App">
      <Header />
      <h1>Capstone Project</h1>

      <Routes>
        <Route path="/" element={ <Photos /> } />
        <Route path="/cart" element={ <Cart /> } />
      </Routes>
    </div>
  );
}

export default App;
