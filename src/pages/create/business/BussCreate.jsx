import React, { useEffect, useState } from 'react'
import "../../../css/create/css.css"
import FormInput from "./FormInput"

import { Link } from 'react-router-dom'
import axios from 'axios'
import App from '../../../posts/bussiness/App'
import "../../../posts/bussiness/index.css"
  const Create =()=>{



    const [values,setValues] = useState({
 
     
      
      names:"",
      tel:"",
      bussname:"",
     
   
      class:"",
      option:"",

     
     });
    //  const Navigate =useNavigate();
     const inputs=[
     
     
      {
        id:1,
        name:"names",
        type:"names",
        placeholder:"Enter your name",
        errorMessage:"Your names are needed",
        label:"Yours names",
        required:true
      },
     
      {
        id:2,
        name:"Bussinessname",
        type:"Bussinessname",
        placeholder:"Bussinessname",
        errorMessage:"Bussinessname is not lequired but you can put no problem ",
        label:"Bussinessname",
      
        required:true
      },
      {
        id:3,
        name:"tel",
        type:"telephone",
        placeholder:"Enter your telephone number",
        errorMessage:"Your numbers are needed",
        label:"Yours phone numbers",
        required:true
      },
     
      {
        id:4,
        name:"location",
        type:"text",
        placeholder:"location like Kigali , Rwanda",
        errorMessage:"location is required ",
        label:"Location",
      
        required:true
      },
      {
        id:5,
        name:"class",
        type:"class",
        placeholder:"Full stack",
        errorMessage:"class required",
        label:"class required",
        required:true
      },
     
      {
        id:6,
        name:"option",
        type:"text",
        placeholder:"Soft developer",
        errorMessage:"Option is required ",
        label:"Option is required",
      
        required:true
      },
      
    
     ];
     
   
   

     const handleSubmit = async(e) =>{
      e.preventDefault();
    console.log(values);
      try{
       
      const dt = await axios.post('https://getcard.onrender.com/users',values)
      .then(() =>{
        alert('Data send successfully');
       Navigate('/Doc')
      
      })





    }
      catch(err){
        console.log(err)
      }
   
    };
  
  
  
    const onChange =(e) =>{
      setValues({...values,[e.target.name]:e.target.value});
    }


return(
 <>
  <p style={{visibility:"hidden"}}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos distinctio iste eius. Qui pariatur obcaecati quae doloribus tenetur cum ab autem, animi inventore accusantium assumenda quisquam eos magnam consectetur voluptatem.</p>
 <div className="app">
 <div className="left" style={{width:"50%",alignItems:"center"}}>
 <App />

</div>
<div className="left">
  <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
<div className="for">
   <form onSubmit={handleSubmit}>
     
     {inputs.map((input)=>(
       <FormInput key={input.id}
       {...input}value={values[input.name]}
       onChange={onChange} />
     ))}
     <button className="btn">Submit</button>
   
     
   </form>
   </div>
 </div>
 </div>
 <br />
 <br />
<p><Link to={'/Doc'}> <button className='button' style={{width:"200px",float:"left",textAlign:"center"}}>View Documents </button></Link></p>
<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
   </>
  )
}

export default Create