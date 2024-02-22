import React, { useEffect, useState } from "react"
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
import Letters from "./pages/letters/Letters";
import Envit from "./pages/envit/Envit";
import Create from "./pages/create/Create"
// import details from "./pages/stdnt/details/details"
import Dashboard from "./dashboard/Dashboard";
// import Hm from "./user/home/Hm";
// import { AuthProvider } from './pages/Auth/Autho';
import Cv from "./pages/cv/Cv"
import Envmemo from "./pages/envitation/Envmemo"
import Bsns from "./pages/bsns/Bsns"
import Fletter from "./pages/fletter/Fletter"
import Stdnt from "./pages/stdnt/Stdnt"



function App() {
 

  return (
    <>
 <BrowserRouter>

    <Header/>
    <br />
  
    <Routes>
      <Route path="/Login" element={<Login/>} ></Route>
      <Route path="/Register" element={<Register/>} ></Route>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/About" element={<About/>} ></Route>
      <Route path="/Services" element={<Services/>} ></Route>
      <Route path="/View" element={<View/>} ></Route>
      <Route path="/Letters" element={<Letters/>} ></Route>
      <Route path="/Envit" element={<Envit/>} ></Route>
      {/* <Route path="/Create" element={<Create/>} ></Route> */}
      {/* <Route path="/details/:id" component={<details />} /> */}
      <Route path="/Dashboard" element={<Dashboard/>} ></Route>
      
                        <Route path="/Stdnt" element={<Stdnt/>} ></Route>
                        <Route path="/Cv" element={<Cv/>} ></Route>
                        <Route path="/Fletter" element={<Fletter/>} ></Route>
                        <Route path="/Bsns" element={<Bsns/>} ></Route>
                        <Route path="/Envmemo" element={<Envmemo/>} ></Route>
    </Routes>
    <br />
 
  <Footer/>
 
    </BrowserRouter>
    </>
  )
}

export default App
