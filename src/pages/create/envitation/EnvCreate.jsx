import React, { useEffect, useState } from 'react'
import "../../../css/create/css.css"
import FormInput from "./FormInput"
import HomeEnv from '../../../posts/envit/HomeEnv'

  const Create =()=>{



    const [values,setValues] = useState({
 
     fname:"",
     mname:"",
     wifename:"",
     malename:"",
     dates:"",
     time:"",
     loc:"",
     location:"",
     num:"",
     phone:"",

     
     });
   
     const inputs=[
     
     
      {
        id:1,
        name:"fname",
        type:"names",
        placeholder:"Enter your male name",
        errorMessage:"Your names are needed",
        label:"Yours family head",
        required:true
      },
      {
        id:2,
        name:"mname",
        type:"names",
        placeholder:"Enter your female dad name",
        errorMessage:" names are needed",
        label:"family head names",
        required:true
      },
      {
        id:3,
        name:"malename",
        type:"names",
        placeholder:"Enter your male name",
        errorMessage:"Your names are needed",
        label:"Male names",
        required:true
      },
      {
        id:4,
        name:"wifename",
        type:"names",
        placeholder:"Enter your female name",
        errorMessage:"Your names are needed",
        label:"wife names",
        required:true
      },
      ,
      {
        id:5,
        name:"dates",
        type:"date",
        placeholder:"Enter happening date",
        errorMessage:"Your dates are needed",
        label:"Dates",
        required:true
      },
      
      {
        id:6,
        name:"time",
        type:"time",
        placeholder:"Enter dowly date",
        errorMessage:"Your time is needed",
        label:"Time",
        required:true
      },
      {
        id:7,
        name:"location",
        type:"text",
        placeholder:"Enter location where reception",
        errorMessage:"receiption address needed",
        label:"Address needed",
        required:true
      },
      {
        id:8,
        name:"loc",
        type:"text",
        placeholder:"Enter church wedding happen",
        errorMessage:"church address needed",
        label:"Church needed",
        required:true
      },
      {
        id:9,
        name:"num",
        type:"telephone",
        placeholder:"Enter wife phone",
        errorMessage:"contact address needed",
        label:"Wife contact needed",
        required:true
      },
      {
        id:10,
        name:"phone",
        type:"telephone",
        placeholder:"Enter Husband phone",
        errorMessage:"contact address needed",
        label:"Husband contact needed",
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
 <HomeEnv />

</div>
<div className="left">
  <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
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
{/* <p><Link to={'/Doc'}> <button className='button' style={{width:"200px",float:"left",textAlign:"center"}}>View Documents </button></Link></p> */}
<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />


<b>"Kandi Uwiteka azahasesekara agagare hejuru yabo" - Zakariya 9:14</b> 

<h4>Umuryango wa {values.fname} na {values.mname} bishimiye kubatumira mu bukwe bw`abana babo </h4>
 
 <center><label><b>{values.malename}</b> </label>
         <b>na</b>&nbsp;
         <label><b>{values.wifename} </b> </label></center>
         <label><h3>Buzaba tariki :{values.dates}</h3> </label>
 <p><b>--- {values.time} :Gusezerana imbere y`Imana {values.loc}</b></p>
 <p><label> Nyuma yiyo mihango abatumiwe bazakiririrwa {values.location}</label></p>
 <label htmlFor="info"> <h3>Kuza kwanyu n`inkunga ikomeye cyane</h3></label>
 <div className='left'>
 <h4><u>{values.malename}</u> </h4>
<p>{values.phone}</p>
</div>
<div className="left">
 <h4><u>{values.wifename} </u></h4>
<p>{values.num}</p>
  </div>
 <br />

   </>
  )
}

export default Create