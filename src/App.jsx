import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./pages/view/View";
import Register from "./pages/form/register/Register"
import Home from "./pages/home/Home"
import { Header } from "./components/header/Header";
import Login from "./pages/form/login/Login"
import "./App.css"
import About from "./pages/About/About";
import Footer from "./components/footer/Footer"
import Services from "./pages/services/Services";


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
      <Route path="/Services" element={<Services/>} ></Route>
      <Route path="/View" element={<View/>} ></Route>
     
    </Routes>
    <br />
    <br />
  <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
