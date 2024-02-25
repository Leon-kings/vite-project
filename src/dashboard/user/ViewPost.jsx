import React, { useEffect, useState } from 'react'
import "../../css/dash/dash.css"
import axios from 'axios';
function ViewPost() {
        // fetching data

const [backendData,setBackEndData]= useState([]);
useEffect(()=>{
  const getData = async() =>{
    const response = await axios.get('https://getcard.onrender.com/posts')
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
    <div className="header" >
    <p style={{visibility:"hidden"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat atque ex dolore harum quia quas veritatis nisi repellendus cum voluptates quidem, corporis recusandae minus architecto inventore officia aut ut autem?</p>
 </div>
 <table className='table'>
    <thead>
        <tr>
            <th>ID</th>
            <th>NAMES</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
          
        </tr>
    </thead>
    <tbody>
        <tr>

            <td>{backendData.id}</td>
            <td>{backendData.name}</td>
            <td>{backendData.title}</td>
            <td>{backendData.desc}</td>

        </tr>
    </tbody>
 </table>
 
   
   </>
  )
}

export default ViewPost