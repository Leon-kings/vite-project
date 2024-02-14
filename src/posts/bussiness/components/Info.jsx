import React from 'react'
import cardImage from '../assets/avatar-profile.png'

export default function Info() {
    return (
        <div className="card--info">
            <img className="card--image" src={cardImage} alt="profile" />
            <h2>Names: <i>A-Leon</i> </h2>
            <br />
            <h5 style={{color:"green"}}>Full Stack Developer</h5>
            {/* <label>React and Node js</label> */}
            <div className="info--buttons">
{/* <p><b>Email: <span style={{color:"blue",textDecoration:"none"}}>kingsleon250@gmail.com</span> </b> </p> */}
<h3><b> kingsleon250@gmail.com</b></h3>
<h5>+250-7879-44-577</h5>
<h5>www.leon.com</h5>
            </div>
        </div>
    )
}