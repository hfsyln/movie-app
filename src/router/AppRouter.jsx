import React from 'react'
import {Routes, Route, Navigate  } from 'react-router-dom';
import Main from '../pages/Main';
import Register from '../pages/Register';
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail"

const Router = () => {
  return (
    <Routes>
      <Route path="/"  element={<Main/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/register"  element={<Register/>}/>
      <Route path="/details" element={<MovieDetail/>}/>
      <Route path="*" element={<Main/>}/>
    </Routes>
  )
}

export default Router