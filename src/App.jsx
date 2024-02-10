import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./pages/form/register/Register"
import Home from "./pages/home/Home"
import { Header } from "./components/header/Header";
import Login from "./pages/form/login/Login"
import "./App.css"
import About from "./pages/About/About";



function App() {


  return (
    <>
 <BrowserRouter>
   
    <Header/>
    <br />
    <br />
    <Routes>
      <Route path="/Login" element={<Login/>} ></Route>
      <Route path="/Register" element={<Register/>} ></Route>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/About" element={<About/>} ></Route>
     
    </Routes>
    <br />
    <br />
  
    </BrowserRouter>
    </>
  )
}

export default App
