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
			<div className='container'>
		
<p>The versitile online documentation software that will stimulates the creation of your </p>
<p>proposal <b> <a href="#">Envitation card</a></b>,<b> <a href="#">students card</a></b>,<b> <a href="#">postal card</a></b>,<b> <a href="#">bussiness card</a></b></p>

			</div>
			<div className="check">
	<div className='box b.oxItem/'

>


<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"100px"}}>


  <div className="w3-row-padding w3-padding-16 w3-center" >
    <div className="w3-quarter">
      <img src={g} style={{width:"80%",height:"400px"}}/>
      <h3>Envitation card</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
	</div>
	<div className='box boxItems'>
    <div className="w3-quarter">
	<img src={g} style={{width:"100%"}}/>
      <h3>Let Me Tell You About This Steak</h3>
      <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>

    <div className="w3-quarter">
	<img src={g} style={{width:"100%"}}/>
      <h3>Cherries, interrupted</h3>
      <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      <p>What else?</p>
    </div>
	
    <div className="w3-quarter">
 <img src={g} style={{width:"100%"}}/>
      <h3>Once Again, Robust Wine and Vegetable Pasta</h3>
      <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
  </div>		
  
  </div>

  <div className="w3-row-padding w3-padding-16 w3-center">
    <div className="w3-quarter">
 <img src={g} style={{width:"100%"}}/>
      <h3>Envitation Letter</h3>
      <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div className="w3-quarter">
 <img src={g} style={{width:"100%"}}/>
      <h3>Envitation letter</h3>
      <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div className="w3-quarter">
 <img src={g} style={{width:"100%"}}/>
      <h3>Envitation letter</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div className="w3-quarter">
	 <img src={g} style={{width:"100%"}}/>
      <h3>Le French</h3>
      <p>Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
  </div>
  <div className="w3-row-padding w3-padding-16 w3-center">
    <div className="w3-quarter">
 <img src={g} style={{width:"100%"}}/>
      <h3>All I Need Is a Popsicle</h3>
      <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div className="w3-quarter">
 <img src={g} style={{width:"100%"}}/>
      <h3>Salmon For Your Skin</h3>
      <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div className="w3-quarter">
 <img src={g} style={{width:"100%"}}/>
      <h3>The Perfect Sandwich, A Real Classic</h3>
      <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
    </div>
    <div className="w3-quarter">
	 <img src={g} style={{width:"100%"}}/>
      <h3>Le French</h3>
      <p>Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
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
  