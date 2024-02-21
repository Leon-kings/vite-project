

import React from "react"
import { User } from "./User"
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"
import  g from "../../assets/images/g.jpg"
// import { useAuth } from '../../pages/Auth/Autho';
import "../../css/components/header/header.css"
export const Header = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <>
      <header className='header'>
        <div className='container flex'>
          <div className='logo'>
            <img src={g} alt='logo' width='100px' />
          </div>
          
          <div className='account '>
          <nav>
            <ul>
              
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
              {/* <li className="right"><User /></li> */}

         
</ul>
          </nav>        
            
          
           </div>
        </div>
      </header>
    </>
  )
}
