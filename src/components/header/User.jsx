import { useState } from "react"
import {  IoSettingsOutline } from "react-icons/io5"
import { BiLogOut, BiLogIn, BiArchiveOut } from "react-icons/bi"
import "../../css/components/header/header.css"
import { Link } from "react-router-dom"
import  g from "../../assets/images/g.jpg"
export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)
  const close = () => {
    setProfileOpen(false)
  }




const logout =()=>{
  
}




  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <p className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src={g} alt='' />
            </p>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <Link to='/account'>
                <div className='image'>
                    <div className='img'>
                      <img src={g} alt='' />
                    </div>
                    <div className='text'>
                      <h4>Leon</h4>
                      <label>Kigali,Rwanda</label>
                    </div>
                  </div>  
                </Link>
                <Link to='/Register'>
                  <li className='box'>
                    <BiArchiveOut className='icon' />
                    <h4>Register</h4>
                  </li>
                </Link>

                <Link to='/login'>
                  <li className='box'>
                    <BiLogIn className='icon' />
                    <h4>Login</h4>
                  </li>
                </Link>
                <Link to='/Dashboard'>
                  <li className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </li>
                </Link>

                <Link onClick={logout}>
                <li className='box'>
                  <BiLogOut className='icon' />
                  <button>Log Out</button>
                </li>
                </Link>
                                {/* viewd in small device */}
                                <div className="view">
                <Link to='/Dashboard'>
                  <li className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>Services</h4>
                  </li>
                </Link>



                </div>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}
