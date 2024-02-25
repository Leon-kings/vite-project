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
import Create from "./pages/create/official/legal/Create"
import Screate from "./pages/create/official/student/Screate"
import Dashboard from "./dashboard/Dashboard";
import BussCreate from "./pages/create/business/BussCreate"
import Cv from "./pages/cv/Cv"
import Envmemo from "./pages/envitation/Envmemo"
import Bsns from "./pages/bsns/Bsns"
import Fletter from "./pages/fletter/Fletter"
import Stdnt from "./pages/stdnt/Stdnt"
import EnvCreate from "./pages/create/envitation/EnvCreate"
import DetailsS from "./pages/stdnt/details/DetailsS";
import { DetailsPages } from "./posts/details/DetailsPages";
import ViewUser from "./dashboard/user/ViewUser";
import ViewPost from "./dashboard/user/ViewPost";
import ViewMsg from "./dashboard/user/ViewMsg";
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
              <Route path="/Create" element={<Create/>} ></Route>
              <Route path="/Screate" element={<Screate/>} ></Route>
              <Route path="/EnvCreate" element={<EnvCreate/>} ></Route>
              <Route path="/BussCreate" element={<BussCreate/>} ></Route>
      <Route path="/details/:id" component={<DetailsPages />} />
      <Route path="/details/:id" component={<DetailsS />} />
      <Route path="/Dashboard" element={<Dashboard/>} ></Route>
      
                        <Route path="/Stdnt" element={<Stdnt/>} ></Route>
                        <Route path="/Cv" element={<Cv/>} ></Route>
                        <Route path="/Fletter" element={<Fletter/>} ></Route>
                        <Route path="/Bsns" element={<Bsns/>} ></Route>
                        <Route path="/Envmemo" element={<Envmemo/>} ></Route>
                                <Route path="/ViewUser" element={<ViewUser/>} ></Route>
                                <Route path="/ViewPost" element={<ViewPost/>} ></Route>
                                <Route path="/ViewMsg" element={<ViewMsg/>} ></Route>
    </Routes>
    <br />
 
  <Footer/>
 
    </BrowserRouter>
    </>
  )
}

export default App
