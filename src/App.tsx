import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Wishlist from './Components/Wishlist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Wishlist' element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
