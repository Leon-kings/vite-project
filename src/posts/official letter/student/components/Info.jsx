import React from 'react'
import cardImage from '../assets/avatar-profile.png'

export default function Info() {
    return (
        <div className="card--info">
            <img className="card--image" src={cardImage} alt="profile" />
            <h2> Names: A-Leon</h2>
            <br />
            <h5 style={{color:"green"}}>Web Developer</h5>
            <label>Level II</label>
            <div className="info--buttons">

<h3>School email:<b> kingsleon250@gmail.com</b></h3>
<h3> School contacts: </h3>+250-7879-44-577
            </div>
        </div>
    )
}