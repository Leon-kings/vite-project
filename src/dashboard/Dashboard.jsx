

import React from 'react'
import "../css/dash/dash.css"
import { Link } from 'react-router-dom'
import ViewUser from './user/ViewUser'

function Dashboard() {
  return (
  <>
<div className="box">
  <div className="header">
  <div id='non-visible'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum tempora fugit, et id debitis repudiandae dicta nesciunt ducimus. Soluta repellendus assumenda laudantium molestias atque doloremque, mollitia distinctio eaque laborum tempora.</div>
  </div>
  <div className="container grid">
    <div className="nav">
      <ul>
<li><Link to={"/ViewUser"}> <button className='button'>USER</button></Link> </li>
<li><Link  to={"/ViewPost"}><button className='button'>POSTS</button></Link> </li>
<li><Link  to={"/ViewUser"}><button className='button'>VIEWED</button> </Link></li>
<li><Link  to={"/ViewMsg"}><button className='button'>MESSAGES</button></Link> </li>
      </ul>
    </div>
    <div className="column">
    <div className='left ' id='block' >
   <p title='Admin dashboard'><b>23 Viewed</b> </p>
   
 </div>
{/* <p>vied</p> */}
</div>
    <div className='left' id='block'>
    <p  title='View on posts'><b>6+ posts</b> </p>
    </div>

    <div className='left' id='block'>
    <p  title='View on user'><b>5 Logged in</b> </p>
    </div>
    
    </div>
<br />
<br />
<br />
  </div>


   </>
  )
}

export default Dashboard