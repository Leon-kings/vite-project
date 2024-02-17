import React from 'react'
// import "../../../css/posts/rectCard/rectcard.css"
import g from "../../../pages/home/g.jpg"

function Info() {
  return (
   <>

    <div className="Card" style={{border:"11px solid black",padding:"12px"}}>
        <div>
                <div className="left">
                  <p style={{padding:"0px",margin:"0px",textAlign:"left"}}> <img src={g} alt="" style={{width:"45px",height:"35px"}} /> </p> 
                </div>
                <div className="left">
                <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>
                     <label style={{color:"white",backgroundColor:"green",padding:"0px",margin:"0px",textDecoration:"underline"}}>KIGALI INTERNATIONAL ART COLLEGE</label>
                     </p>
                     
                </div>
                </div>
                <div>
                    <p>STUDENT CARD</p>
<div className="left">
<img src={g} alt="" style={{width:"75px",height:"65px"}} />
                    
</div>
                  
  <div className="left">
<p style={{padding:"0px",margin:"0px",textAlign:"left"}}>Reg No:8628612627</p>
                </div>

                </div>
<div>
<p style={{padding:"0px",margin:"0px",textAlign:"left"}}>Names:AKINGENEYE Leon  </p>
<p style={{padding:"0px",margin:"0px",textAlign:"left"}}>Courses: Software Development</p>
<p style={{padding:"0px",margin:"0px",textAlign:"center"}}>Manif-Date: 23-09-2023</p>
<p style={{padding:"0px",margin:"0px",textAlign:"center"}}>Expire-Date: 10-01-2024</p>
</div>

 </div>

  </>
  )
}

export default Info

                 



    

   
   
 