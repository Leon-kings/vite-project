import  { useEffect, useState } from "react";
import React from "react";
import "../../../css/form/universal.css"
import FormInput from "../../../components/action/FormInput"
import {useNavigate} from "react-router-dom"

import { Link } from "react-router-dom";
import axios from "axios";
const Login =()=>{
  
  const [values,setValues] = useState({
 
    email:"",

    password:"",
  
  });
  const Navigate =useNavigate();
  const inputs=[
  
 
    {
      id:1,
      name:"email",
      type:"email",
      placeholder:"email",
      errorMessage:"email should be valid and should incloude @ symbols",
      label:"email",
      required:true
    },
 
    {
      id:2,
      name:"password",
      type:"password",
      placeholder:"password",
      errorMessage:"passworx should be 8-12 characters include at least 1 letter and 1 symbol",
      label:"password",
    
      required:true
    },
  ];

// fetching data from database
         // handleSubmit
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
     
      const dt = await axios.post('https://getcard.onrender.com/users/auth',values)
      .then(() =>{
        alert('User Logged in successfully');
       Navigate('/')
        
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
      <form onSubmit={handleSubmit}>
        <h1>Log in</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id}
          {...input}value={values[input.name]}
          onChange={onChange} />
        ))}
        <button className="btn">Submit</button>
        <p>If you don`t have an account got <a ><Link to="/Register"><b>Register</b> </Link> </a></p>
        
      </form>
    </div>
    
    </>
  )
}
export default Login ;