import  { useState } from "react";
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
  const Navigate=useNavigate();
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
  const handleSubmit = (e) =>{
    e.preventDefault();
    // handleSubmit
    console.log(values);
    
    axios.post('http://localhost:8000/users')
    .then(results=>{
      results.data.map(user=>{
        if(user.email === values.email){
          if(user.password === values.password){
alert('Login successfully');

Navigate('/Home');
if(user.email !== values.email || user.password !== values.password){
  alert('you have to sign up first');
  Navigate('/Register');
}
          }else {
           
          console.log('Wrong password')
          }
        }
        else{
          console.log('invalid input')
        }
      })
    })





  };
  const onChange =(e) =>{
    setValues({...values,[e.target.name]:e.target.value});
  }
  return(
    <>
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