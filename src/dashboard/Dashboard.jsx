import React from 'react'
import "../css/dash/dash.css"
import { BiHelpCircle, BiLogOut, BiParagraph, BiSelection, BiUser} from "react-icons/bi"
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (
   <>
   

  <div class="contai">
    {/* <nav>
      <div className="navbar">

        <ul>
          <li>
           
            <Button className="nav-item"><BiUser /></Button >
          
          </li>
         &nbsp; &nbsp; &nbsp; &nbsp;
         
          <li>
            
            <Button className="nav-item"><BiParagraph /></Button>
         
          </li>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <li>
            
            <Button className="nav-item"><BiSelection /></Button>
          
          </li>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <li>
           
            <Button className="nav-item"> <BiHelpCircle /></Button>
          
          </li>
          {/* <li><a href="#" className="logout">
           <BiLogOut />
            <Button className="nav-item">Logout</Button>
          </a>
          </li> */}
        {/* </ul>
      </div>
    </nav>  */}

    <section className="main">
      <div className="main-top">
        <p>Explore the universe!</p>
      </div>
      <div className="main-body">
        {/* <h3>Welcome</h3> */}
      


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
          {/* <span>1 days ago</span> */}
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
    </section>
  </div>

   
   </>
  )
}

export default Dashboard