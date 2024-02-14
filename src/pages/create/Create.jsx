import React from 'react'
  const Log =()=>{
  return (
   <>
  
<h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ab, illum iusto optio rem eius atque est ea quibusdam repudiandae magnam? Quibusdam, suscipit nisi molestias nobis libero quidem distinctio enim. </h2>

 
<form style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto",padding:"20px" }}>
 
<input type="text" name='name'  style={{ marginBottom: "1rem" }} placeholder='Text a name of document' required />
<input type="file" name='file'  style={{ marginBottom: "1rem" }}  placeholder='file required' required/>
<button className='button'>Send</button>

</form>
 

   
   
   </>
  )
}

export default Log