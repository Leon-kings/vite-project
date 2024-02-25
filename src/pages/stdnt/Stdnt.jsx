


// import React, { useState, useEffect } from 'react';
// import blogPost from './blog.json';
// import { Link } from 'react-router-dom';


// const Sidebar  = (props) => {

//   const [posts, setPosts] = useState([]);

//   useEffect(()=>{

//     const posts = blogPost.data;
//     setPosts(posts);
//   }, posts);

//   return(
//     <>
//     <section className='blog'>
//       <div className="container grid3">
    

// {
//   posts.map(post => {

//     return(

    
//       <div >


// <div className='box boxItems' key={post.id}>
//   <div className="Img">
//   <Link to={`/details/${post.id}`}>
// <img style={{width: "50%",height:"50%",display:"flex",flexDirection:"row"}} src={post.blogImage}/>
// </Link>
//    </div>
// </div>


// </div>


//     )

//   })
// }

//     </div>
//     </section>
//     </>
//    )

//  }

// export default Sidebar;

 
   import React from 'react'
import "./css.css"
   function Stdnt() {
    function generateCard(e) {
      // Get value of Student name from form input 
      const nameElement = document.getElementById("name");
      const nameValue = nameElement.value; 
      // Assign the value of student name to generated card
      const cardNameElement = document.getElementById("cardName");
      cardNameElement.innerHTML = nameValue;
  
      // Get value of college name from form input 
      const collegeNameValue = document.getElementById("collegeName").value;
      // Assign the value of college name to generated card
      document.getElementById("cardCollegeName").innerHTML = collegeNameValue;
  
      // Get value of location name from form input 
      const locationValue = document.getElementById("location").value;
      // Assign the value of location name to generated card
      document.getElementById("cardLocation").innerHTML = locationValue;
      
      // Display final generated card to user     
      document.getElementById("collegeCard").style.display = "block";
  }
//   function generateCard() {
//     // Get value of Student name from form input 
//     const nameElement = document.getElementById("name");
//     const nameValue = nameElement.value; 
//     // Assign the value of student name to generated card
//     const cardNameElement = document.getElementById("cardName");
//     cardNameElement.innerHTML = nameValue;

//     // Get value of college name from form input 
//     const collegeNameValue = document.getElementById("collegeName").value;
//     // Assign the value of college name to generated card
//     document.getElementById("cardCollegeName").innerHTML = collegeNameValue;

//     // Get value of location name from form input 
//     const locationValue = document.getElementById("location").value;
//     // Assign the value of location name to generated card
//     document.getElementById("cardLocation").innerHTML = locationValue;
    
//     // Display final generated card to user     
//     document.getElementById("collegeCard").style.display = "block";
// }
function handleSubmit(){
  return false;
  // window.location.reload(false);
}
     return (
    <>
        <section className="w-100">
        <header className="container d-flex bd-navbar">
            <div className="text-light w-100  text-center title-navbar">ID Card Generator</div>
        </header>
        <div className="container d-flex container-box ">
            <div className="section-container section-left col-6 pt-3 pb-3">
                <div className="text-left subtitle-section">
                    <p>
                        Enter Student Details
                    </p>

                </div>
                <form  onSubmit={handleSubmit} className="form-box">
                    <div className="form-element font-icon">
                        <label className="form-label">
                            Enter Name:
                        </label>

                        <input className="form-input" type="text" id="name" />
                        <i className="fa fa-user fa-lg"></i>
                    </div>
                    <div className="form-element font-icon">
                        <label className="form-label">
                            Enter College Name:
                        </label>
                        <input className="form-input" type="text" id="collegeName" />
                        <i className="fa fa-university"></i>
                    </div>
                    <div className="form-element font-icon">
                        <label className="form-label">
                            Enter Location:
                        </label>
                        <input className="form-input" type="text" id="location" />
                        <i className="fa fa-address-book"></i>
                    </div>
                    <div className="d-flex ">
                        <button className="btn-generate" onClick={generateCard}>Generate Card</button>
                    </div>

                </form>
            </div>
            <div className="section-container section-right col-6">
                <div className="id-card-container" id="collegeCard">
                    <div className="text-center subtitle-card">
                        Generated ID Card
                    </div>
                    <div className="card-container">
                        <div className="card-wrapper">
                            <div className="user-card">
                                <span className="user-photo">
                                    <i className="fa fa-user"></i>
                                </span>
                            </div>
                            <div className="general-information">
                                <div className="card-element card-name">
                                    <span className="card-title">Name:</span>
                                    <span className="card-input" id="cardName"></span>
                                </div>
                                <div className="card-element college-name">
                                    <span className="card-title">College Name:</span>
                                    <span className="card-input" id="cardCollegeName"></span>
                                </div>
                                <div className="card-element college-name">
                                    <span className="card-title">Location:</span>
                                    <span className="card-input" id="cardLocation"></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="./new/js/index.js"></script>
    </section>
    
    {/* <div className="container d-flex">
        <div className="section-container col-6">
            <div className="text-center">
                Input form
            </div>
            <form >
                <div className="form-element">
                    <label className="form-label">
                        Enter Name:
                    </label>
                    <input type="text" id="name" />
                </div>
                <div className="form-element">
                    <label className="form-label">
                        Enter College Name:
                    </label>
                    <input type="text" id="collegeName" />
                </div>
                <div className="form-element">
                    <label class="form-label">
                        Enter Location:
                    </label>
                    <input type="text" id="location" />
                </div>
                <button onClick={generateCard}>Generate Card</button>
            </form>
        </div>
        <div className="section-container col-6">
            <div className="id-card-container" id="collegeCard">
                <div className="text-center">
                    Generated Card
                </div>
                <div className="card-container">
                    <div className="card-wrapper">
                        <div className="user-card">
                            <span className="user-photo">
                                <i className="fa fa-user"></i>
                            </span>
                        </div>
                        <div className="general-information">
                            <div className="card-element card-name">
                                <span>Name:</span>
                                <span id="cardName"></span>
                            </div>
                            <div className="card-element college-name">
                                <span>College Name:</span>
                                <span id="cardCollegeName"></span>
                            </div>
                            <div className="card-element college-name">
                                <span>Location:</span>
                                <span id="cardLocation"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     */}
    
    </>
     )
   }
   
   export default Stdnt        
     



