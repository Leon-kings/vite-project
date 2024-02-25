import React, { useEffect, useState } from 'react'
import "../../../../css/create/css.css"
import FormInput from "./FormInput"
import Official from "../../../../posts/official letter/legal/Official"
import { Link } from 'react-router-dom'
import axios from 'axios'

  const Create =()=>{



    const [values,setValues] = useState({
 
     
      social:"",
      names:"",
      tel:"",
      location:"",
      receiveraddress:"",
      receivertitle:"",
      date:"",
      experience:"",
      academic:"",
     
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
        name:"social",
        type:"text",
        placeholder:"social",
        errorMessage:"social is not lequired but you can put no problem ",
        label:"LinkedIn ",
      
        required:false
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
        name:"receiveraddress",
        type:"text",
        placeholder:"Enter Receiver address",
        errorMessage:"Reciver adress required",
        label:"Receiver adress required",
        required:true
      },
     
      {
        id:4,
        name:"receivertitle",
        type:"text",
        placeholder:"Director general of LD",
        errorMessage:"Title is required ",
        label:"Receiver titles required",
      
        required:true
      },
      ,
     
      {
        id:5,
        name:"date",
        type:"date",
        placeholder:"Enter date",
        errorMessage:"Date is required ",
        label:"Date is required",
      
        required:true
      },
      ,
     
      {
        id:6,
        name:"experience",
        type:"experience",
        placeholder:"Tell me about your experience",
        errorMessage:"Experience is required ",
        label:"Experience  required",
      
        required:true
      },
      ,
     
      {
        id:7,
        name:"academic",
        type:"academic",
        placeholder:"Tell me about academic background",
        errorMessage:"Academic background is required ",
        label:"Accademic is required",
      
        required:true
      },
     ];
     
   
   

     const handleSubmit = async(e) =>{
      e.preventDefault();
    console.log(values);
   
    };
  
  
  
    const onChange =(e) =>{
      setValues({...values,[e.target.name]:e.target.value});
    }


return(
 <>
  <p style={{visibility:"hidden"}}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos distinctio iste eius. Qui pariatur obcaecati quae doloribus tenetur cum ab autem, animi inventore accusantium assumenda quisquam eos magnam consectetur voluptatem.</p>
 <div className="app">
 <div className="left" style={{width:"50%",alignItems:"center"}}>
<Official />

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

<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br />
<div className="card--info">
            <div>
            
           <div className="right" >
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>{values.names}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}} >{values.tel}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>{values.address}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>On {values.date}</p>
           </div>
           </div>
           <br />
           <br />
           <br />
           <br />
           <div className="left" style={{float:"left"}}>
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>{values.receivertitle}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>{values.receiveraddress}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>Dear Sir,</p>
           </div>
          
    <div className="full">
       
        <p style={{visibility:"hidden"}} > <b> <u>RE: Application for Job vacancy</u></b> </p>
        <p style={{padding:"0px",margin:"0px"}}> <b> <u>RE: Application for Job </u></b> </p>
        <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>I hambly writting this read to apply job vacancy in a company that you are a head of.</p>
        <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>Am Rwandan citizen,{values.academic}
            ,{values.experience}.</p>
         <br /><p style={{padding:"0px",margin:"0px",textAlign:"left"}}>Your Sincierly.</p>
            
    </div>
    <p> <button className='button' style={{width:"200px",float:"left",textAlign:"center"}}>Download</button></p>
        </div>
        
        <br />
        <br />
   </>
  )
}

export default Create