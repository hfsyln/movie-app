import React from 'react'
import {Routes, Route, BrowserRouter  } from 'react-router-dom';
import Main from '../pages/Main';
import Register from '../pages/Register';
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail"
import Navbar from '../conponents/Navbar';

const Router = () => {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path="/"  element={<Main/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/register"  element={<Register/>}/>
      <Route path="/details" element={<MovieDetail/>}/>
      <Route path="*" element={<Main/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router