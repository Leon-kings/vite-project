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
           
  <b>"Kandi Uwiteka azahasesekara agagare hejuru yabo" - Zakariya 9:14</b> 

<h4>Umuryango wa SENDANYUZWE Slyvester na KARENGANE modeste bishimiye kubatumira mu bukwe bw`abana babo </h4>
 
 <center><label><b>MUKAMBUGUJE Marie Claire</b> </label>
         <b>na</b>&nbsp;
         <label><b>MUKAMBUGUJE Marie Claire</b> </label></center>
        </div>

        <label><h3>Buzaba tariki :18/08/2018</h3> </label>
 <b>--- Saa kenda 15h00 :Gusezerana imbere y`Imana REGINA PAXIS-Remera</b><p>
 <label> Nyuma yiyo mihango abatumiwe bazakiririrwa mu rugo rw`abageni Kabgayi</label></p>
 <label htmlFor="info"> <h3>Kuza kwanyu n`inkunga ikomeye cyane</h3></label>
 <div className='left-content'>
 <label> <h4 style={{color:"green"}}><u>Claire</u> </h4></label>
 <label>+2707878888787</label>
</div>
<div className="right-content">
 <h4 style={{color:"green"}}><u> Claude</u></h4>
 <label>+250874763637</label> </div>
 <br />
  </>
  )
}

export default Doc