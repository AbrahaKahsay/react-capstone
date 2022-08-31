import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes> */}
    </BrowserRouter>
    </>
  );
}

export default App;
