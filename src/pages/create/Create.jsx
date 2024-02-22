import React from 'react'
import Screenshot from "../../assets/images/New folder/Screenshot.png"
  const Log =()=>{
  return (
   <>
  
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