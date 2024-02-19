import React from 'react'
import "../css/dash/dash.css"
import { BiHelpCircle,  BiUser} from "react-icons/bi"
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (
   <>
   
<p style={{visibility:"hidden"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste. Reiciendis hic deleniti recusandae doloribus molestiae sunt perspiciatis corporis, accusamus nisi, inventore incidunt itaque aliquam temporibus, exercitationem eius! Doloremque, iure.</p>
  <div class="contai">

    <section className="main">
      <div className="main-top">
        <p>Explore the universe!</p>
      </div>
      <div className="main-body">
    
      
<div className="grid9">
<div className="left" style={{width:"250px"}}>
  <div style={{backgroundColor:"black",flexDirection:"column"}}>
   
    <ul>
<li> <Button><BiUser /></Button></li>
<li> <Button><BiHelpCircle /></Button></li>
<li> <Button><BiUser /></Button></li>
    </ul>
  </div>
</div>
<div className="container grid3">
      <div className="job_card">
        <div className="job_details">

          <div className="text">
           <button> </button>
   <Button><BiUser /></Button>

          </div>

        </div>
        <div className="job_salary">
          <h4> <Link to={'/viewUsers'}>All users</Link> </h4>
          
        </div>
      </div>
      
      <div className="job_card">
        <div className="job_details">

          <div className="text">
          <Button><BiUser /></Button>
            
          </div>
        </div>
        <div className="job_salary">
          <h4><Link to={'/viewDocs'}>All Documents</Link></h4>
          
        </div>
      </div>
      <div className="job_card">
        <div className="job_details">

          <div className="text">
          <Button><BiUser /></Button>
            
          </div>
        </div>
        <div className="job_salary">
          <h4><Link to={'/viewDocs'}>All Documents</Link></h4>
          
        </div>
      </div>

      
       
    
    </div>
    </div>
    </div>
    </section>
  </div>
<br />
<br />
<br />
<br /> 
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum itaque in accusantium vero, veniam tempora laboriosam tempore. Voluptatem recusandae accusantium iure commodi temporibus provident architecto sed dignissimos? Voluptatum, vitae illo!</p>
   </>
  )
}

export default Dashboard