

// import "./header.css"
// import { User } from "./User"
// import { nav } from "../assets/data/data"
// import { Link } from "react-router-dom"
// import g from "../images/g.jpg"
// // import "../../index.css"
// import "./header.css"
// export const Header = () => {

//   return (
//     <>
//       <header className='header'>
//         <div className='container flex'>
//           <div className='logo'>
//             <img src={g} alt='logo' width='100px' />
//           </div>
//           <div className='account '>
//           <nav>
//             <ul>
            
         
// </ul>
//           </nav>        
            
          
//            </div>
//         </div>
//       </header>
//     </>
//   )
// }
import React from "react";
import { User } from "./User"
import { nav } from "../assets/data/data"
import { Link } from "react-router-dom"
import g from "../images/g.jpg"

import "./header.css"
const Footer =()=>{
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
                
             
    </ul>
              </nav>        
                
              
               </div>
            </div>
          </header>
        </>
      )
}
export default Footer