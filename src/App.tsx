import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';
import { HomePage } from './Components/Homepage';
import { SignUp } from './Components/SignUp';
import { WishList } from './Components/WishList';
import { AddGame } from './Components/AddGame';
import { Messages } from './Components/Messages';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/WishList' element={<WishList />} />
        <Route path='/AddGame' element={<AddGame />} />
        <Route path='/Messages' element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
