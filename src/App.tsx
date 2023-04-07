import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';
import { HomePage } from './Components/Homepage';
import { SignUp } from './Components/SignUp';
import { WishList } from './Components/WishList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <HomePage /> */}
        {/* <SignUp /> */}
        <WishList />
      </div>
      <Routes>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
