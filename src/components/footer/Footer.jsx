
import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import "../../css/components/footer/footer.css"
function Footer() {
  return (
         <footer className='boxItems'>
        <div className='container flex'>
          <p><i>Leon.Inc</i> </p>
          <div className='social'>
            <BsFacebook className='icon' />
            <RiInstagramFill className='icon' />
            <AiFillTwitterCircle className='icon' />
            <AiFillLinkedin className='icon' />
          </div>
        </div>
      </footer>
  )
}

export default Footer