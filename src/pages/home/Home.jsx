import React from 'react'
import "../../css/pages/home.css"
import g from "../../assets/images/g.jpg"
// import {  IoSettingsOutline } from "react-icons/io5"
import {  BiAccessibility, BiBall, BiDownload, BiKey, BiMouse, BiPhoneOff } from "react-icons/bi"

import { Link } from 'react-router-dom'

function Home() {
	
	  
	return (
	<>
	  <div className='blog'>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat illum enim molestiae sunt quo voluptatum fugiat saepe asperiores mollitia hic illo, dolores tempore quod minus omnis deleniti laborum, blanditiis aut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
			Asperiores tempora quidem animi natus, ex saepe, harum similique itaque at ea earum tempore in quae. Exercitationem quaerat asperiores dolore eos at!</p>
			<div className='container grid3'>
				    <div className='box boxItems'>
				<div className='img'>
			                <div class="thumb">   
				<div class="inner-content">
                                <h4>Formal letter
                                    </h4>
                                <span><b>Awesome and clean</b>  </span>
                                <div class="main-border-button">
                                    <button className='btn' >View All</button>
                                </div>
                            </div>
					<img src={g} alt="" />
							</div>
				</div>
				
			        </div>
					<div className='box boxItems'>
				<div className='img'>
					
					<div class="thumb">
                            <div class="inner-content">
                                <h4>Envitation card
                                    </h4>
                                <span><b>Awesome and clean</b>  </span>
                                <div class="main-border-button">
                                    <button className='btn' >View All</button>
                                </div>
                            </div>
                           <img src={g} alt="" />
                        </div>
				</div>
				
			        </div>
					<div className='box boxItems'>
					<p><button>Create</button>Documents 
				<h2>Make proffessional documentation in a few seconds</h2></p>
				<form className='form'>
				<p>	<label>More faster <input type="checkbox" name="checked" id="check" checked /></label></p>
				<p><label>view more</label> <input type="checkbox" name="checked" id="check" checked /></p>
				<p><label>create yours </label> <input type="checkbox" name="checked" id="check" checked /></p>
				<p><label>Edit document </label> <input type="checkbox" name="checked" id="check" checked /></p>
				</form>
				<button className='button'> Create your Oun documentation</button>
			        </div>
			{/* header ends */}
			{/* midd page starts */}

			</div>
{/* first floww */}

<div className='header'>
      <div className='container grid9'>
		

<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quia nostrum reiciendis aut maxime repellat at nulla accusantium. Ipsa possimus in porro similique adipisci esse cumque fuga accusantium voluptatem deserunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam at reiciendis sit ut quae perspiciatis nihil atque aspernatur. Consequatur sequi dolorem commodi, voluptatibus animi voluptatem iste culpa molestiae laudantium repudiandae. </p>

			</div>

      </div>

      <div className='container grid3'>

<div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"100px"}}>


  <div className="w3-row-padding w3-padding-16 w3-center" >
    <div className="w3-quarter">
    <Link to="/View"> <img src={g} style={{width:"50%",height:"100px"}}/></Link> 
      <h3>Envitation card</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	
   

  </div>
  </div>

<div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"100px"}}>


  <div className="w3-row-padding w3-padding-16 w3-center" >
    <div className="w3-quarter">
    <Link to="/View"> <img src={g} style={{width:"50%",height:"100px"}}/></Link> 
      <h3>card</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	
   

  </div>

  </div>


  <div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"100px"}}>


  <div className="w3-row-padding w3-padding-16 w3-center" >
    <div className="w3-quarter">
    <Link to="/View"> <img src={g} style={{width:"50%",height:"100px"}}/></Link> 
      <h3>dcard</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	
   

  </div>

  </div>
  </div>
{/* second flow */}


<div className='container grid3'>

<div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"100px"}}>


  <div className="w3-row-padding w3-padding-16 w3-center" >
    <div className="w3-quarter">
    <Link to="/View"> <img src={g} style={{width:"50%",height:"100px"}}/></Link> 
      <h3>Envitation card</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	
   

  </div>
  </div>

<div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"100px"}}>


  <div className="w3-row-padding w3-padding-16 w3-center" >
    <div className="w3-quarter">
    <Link to="/View"> <img src={g} style={{width:"50%",height:"100px"}}/></Link> 
      <h3>card</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	
   

  </div>

  </div>


  <div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"100px"}}>


  <div className="w3-row-padding w3-padding-16 w3-center" >
    <div className="w3-quarter">
    <Link to="/View"> <img src={g} style={{width:"50%",height:"100px"}}/></Link> 
      <h3>dcard</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	
   

  </div>

  </div>
  </div>




  {/* third flow */}



  <div className='container grid3'>

<div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"10px"}}>


  <div className="w3-row-paddingw3-center" >
    <div className="w3-quarter">
    <Link to="/View"> <img src={g} style={{width:"50%",height:"100px"}}/></Link> 
      <h3>Envitation card</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	
   

  </div>
  </div>

<div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"10px"}}>


  <div className="w3-row-padding w3-center" >
    <div className="w3-quarter">
    <Link to="/View"> <img src={g} style={{width:"50%",height:"100px"}}/></Link> 
      <h3>card</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	
   

  </div>

  </div>


  <div className='box boxItems'>
<div className="w3-main w3-content " style={{width:"100%", marginTop:"10px"}}>


  <div className="w3-row-padding  w3-center" >
    <div className="w3-quarter">
    <Link to="/View"> <img src={g} style={{width:"50%",height:"100px"}}/></Link> 
      <h3>dcard</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	
   

  </div>

  </div>
  </div>

			<div className="share">
<div className="center">
<div className='container grid3'>
<div className='box boxItems'>
	<div>
	<BiDownload className='icon' />
	<h3>Download Documents to use it</h3>
	<label htmlFor="share">Use offline as high quality PDF ,Images</label>
	</div>
</div>

<div className='box boxItems'>
	<div>
	<BiKey className='icon' />
	<h3>Use Document privately</h3>
	<label htmlFor="share">Use Documents privatly protected by password </label>
	</div>
</div>

<div className='box boxItems'>
	<div>
	<BiMouse className='icon' />
	<h3>Brourse all</h3>
	<label htmlFor="share">Send you a link on email</label>
	</div>
</div>
</div>
</div>

			</div>
			{/* category */}

			<h3><p><i><b>Category of documentation</b> </i> </p></h3>


			

<div className='container grid3'>

<div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"100px"}}>


  <div className="w3-row-padding w3-padding-16 w3-center" >
    <div className="w3-quarter">
    <Link to="/View"> <img src={g} style={{width:"80%",height:"500px"}}/></Link> 
      <h3>Envitation card</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	
   

  </div>
  </div>

<div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"100px"}}>


  <div className="w3-row-padding w3-padding-16 w3-center" >
    <div className="w3-quarter">
    <Link to="/View"> <img src={g} style={{width:"80%",height:"500px"}}/></Link> 
      <h3>card</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	
   

  </div>

  </div>


  <div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"100px"}}>


  <div className="w3-row-padding w3-padding-16 w3-center" >
    <div className="w3-quarter">
    <Link to="/View"> <img src={g} style={{width:"80%",height:"500px"}}/></Link> 
      <h3>dcard</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	
   

  </div>

  </div>
  </div>

  <div className='container grid3'>

<div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"100px"}}>


  <div className="w3-row-padding w3-padding-16 w3-center" >
    <div className="w3-quarter">
    <Link to="/View"> <img src={g} style={{width:"80%",height:"500px"}}/></Link> 
      <h3>Envitation card</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	
   

  </div>
  </div>

<div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"100px"}}>


  <div className="w3-row-padding w3-padding-16 w3-center" >
    <div className="w3-quarter">
    <Link to="/View"> <img src={g} style={{width:"80%",height:"500px"}}/></Link> 
      <h3>card</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	
   

  </div>

  </div>


  <div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"100px"}}>


  <div className="w3-row-padding w3-padding-16 w3-center" >
    <div className="w3-quarter">
    <Link to="/View"> <img src={g} style={{width:"80%",height:"500px"}}/></Link> 
      <h3>dcard</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	
   

  </div>

  </div>
 </div>









 








 






  
  </div>




	 
	  </>
	)
  }
  
  export default Home
  