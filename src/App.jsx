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
import DetailsPages from "./posts/details/DetailsPages"
import Dashboard from "./dashboard/Dashboard";

function App() {
     const [backendData,setBackEndData]= useState([{}]);
     useEffect(()=>{
      fetch('https://getcard.onrender.com/users')
      .then(
        response=>response.data
        
      ).then(data=>{
        setBackEndData(data);
      })
     }, [])

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
      <Route path="/Letters" element={<Letters/>} ></Route>
      <Route path="/Envit" element={<Envit/>} ></Route>
      <Route path="/Create" element={<Create/>} ></Route>
      <Route path="/DetailsPages/:id" component={<DetailsPages />} />
      <Route path="/Dashboard" element={<Dashboard/>} ></Route>
    </Routes>
    <br />
    <br />
  <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
