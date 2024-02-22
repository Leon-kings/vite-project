import React from 'react'
import Screenshot from "../../assets/images/New folder/Screenshot.png"
  const Log =()=>{



    const [values,setValues] = useState({
 
      email:"",
     
      password:"",
     
     });
     const Navigate =useNavigate();
     const inputs=[
     
     
      {
        id:1,
        name:"names",
        type:"name",
        placeholder:"Enter your name",
        errorMessage:"Your names are needed",
        label:"Yours names",
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
      // try{
       
      //   const dt = await axios.post('https://getcard.onrender.com/users/auth',values)
      //   .then(() =>{
      //     alert('User Logged in successfully');
      //    Navigate('/Home')
          
      //   })
      // }
      //   catch(err){
      //     console.log(err)
      //   }
     
     }; 
     
     
     
     
     const onChange =(e) =>{
      setValues({...values,[e.target.name]:e.target.value});
     }



  return (
   <>

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



























  
<h2 style={{visibility:"hidden"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ab, illum iusto optio rem eius atque est ea quibusdam repudiandae magnam? Quibusdam, suscipit nisi molestias nobis libero quidem distinctio enim. </h2>

 


   <div className="container">
      <div className="box">
<div className="position">

<div className="left">

<img src={Screenshot} alt='' style={{ width: "100%", height: "100%" }} />
</div>



<form style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto",padding:"20px" }}>
<input type="text" name='name'  style={{ marginBottom: "1rem" }} placeholder='Text a name of document' required />
<input type="text" name='tel'  style={{ marginBottom: "1rem" }} placeholder='Text your phone number' required />
<input type="text" name='social'  style={{ marginBottom: "1rem" }}  placeholder='Place your linked account' />
<input type="text" name='location'  style={{ marginBottom: "1rem" }}  placeholder='Kigali , Rwanda' required />
<input type="text" name='responder title'  style={{ marginBottom: "1rem" }}  placeholder='Place receiver Title' required/>
<input type="text" name='address'  style={{ marginBottom: "1rem" }}  placeholder='Place receiver address' />
<input type="text" name='graduation'  style={{ marginBottom: "1rem" }}  placeholder='Place your graduation fields in few words' />
<input type="text" name='apply for'  style={{ marginBottom: "1rem" }}  placeholder='Place what you are applying for' />
<button className='button'>Send</button>

</form>
 



</div>

{/* View your edition */}
<div className="full">
  <button className='btn'>View Your Documents</button>
</div>



      </div>
   
   </div>
   
   </>
  )
}

export default Log