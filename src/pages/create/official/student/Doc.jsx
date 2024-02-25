import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Doc() {
// fetching data

const [backendData,setBackEndData]= useState([]);
useEffect(()=>{
  const getData = async() =>{
    const response = await axios.get('https://getcard.onrender.com/users')
if(response){
  setBackEndData(response.data)
}else{
  console.log(response)
}


   }
getData()
}, [])
console.log(backendData);
// fetching ends






  return (
  <>
  
  <div className="card--info">
            <div className="left" style={{width:"50%", visibility:"hidden"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
           <div className="left">
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>{backendData.names}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}} >{backendData.tel}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>{backendData.location}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>On {backendData.date} </p>
           </div>
           <div className="left">
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>{backendData.receivertitle}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>{backendData.receiveraddress}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>Dear Sir,</p>
           </div>
          
    <div className="full">
       
        <p style={{visibility:"hidden"}} > <b> <u>RE: Application for Job </u></b> </p>
        <p style={{padding:"0px",margin:"0px"}}> <b> <u>RE: Application for Job </u></b> </p>
        <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>I hambly writting this read to apply job vacancy in a company that you are a head of.</p>
        <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>Am Rwandan citizen,i have finished {backendData.academic},also I have ann experience in {backendData.experience}</p>.
        <p>My academic documents are attached to this letter.</p> 
         <br /><p style={{padding:"0px",margin:"0px",textAlign:"left"}}>Your Sincierly.</p>
            
    </div>
    
        </div>


  </>
  )
}

export default Doc