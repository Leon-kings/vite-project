import React from "react";
import  { useState } from "react";
import "../../../css/form/universal.css"
import FormInput from "../../../components/action/FormInput"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const App =()=>{
  const [values,setValues] = useState({
    username:"",
    email:"",
  
    password:"",
    confirmPassword:"",
  });
  const Navigate =useNavigate()
  const inputs=[
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"full names",
      errorMessage:"username should be 3-16 characters and should incloude an symbols",
      label:"full names",
      required:true
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"email",
      errorMessage:"email should be valid and should incloude @ symbols",
      label:"email",
      required:true
    },
 
    {
      id:3,
      name:"password",
      type:"password",
      placeholder:"password",
      errorMessage:"passworx should be 8-12 characters include at least 1 letter and 1 symbol",
      label:"password",
      pattern:"/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g",
      required:true
    },

    {
      id:4,
      name:"confirmpassword",
      type:"password",
      placeholder:"Confirm password",
      errorMessage:"password don`t match",
      label:"Confirm password",
      pattern:values.password,
      required:true
    },
    
    {
      id:5,
      name:"telephone",
      type:"phone",
      placeholder:"phone number",
      errorMessage:"phone number must be 10 numbers",
      label:"Your phone number",
      required:true,
    },
    

  ];
  const handleSubmit = (e) =>{
    e.preventDefault();
    // handleSubmit
    // console.log(values);
 
    
    
    axios.post('http://localhost:8000/users',values)
    .then(() =>{
      alert('User Registered successfully');
      Navigate('/');
    })
    .catch(err =>console.log(err))
 
  };
  const onChange =(e) =>{
    setValues({...values,[e.target.name]:e.target.value});
  }
  return(
    <>
       <br /> <br />
    <div className="app">
    <br /> <br />
      <form onSubmit={handleSubmit}>
        <p></p>
        <h1>register</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id}
          {...input}value={values[input.name]}
          onChange={onChange} />
        ))}
        <button className="btn">Submit</button>
        <p>If you do have an account got <Link to="/Login"><b>Login</b></Link> </p>
      </form>
    </div>
    <br />
    <br />
    </>
  )
}
export default App ;