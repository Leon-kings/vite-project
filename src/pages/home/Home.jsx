import React from 'react'
import "../../css/pages/home.css"
import g from "../../assets/images/g.jpg"
import App from '../../posts/bussiness/App'
import {   BiDownload, BiKey, BiMouse} from "react-icons/bi"
import Appstudent from '../../posts/student/Appstudent'
import { Link } from 'react-router-dom'
import HomeEnv from '../../posts/envit/HomeEnv'
import Slideshow from "../../components/slide/Slideshow"
// images used on the website
// import a from "../../assets/images/a.jpg"
// import Cliparts from "../../assets/images/envitation/Cliparts.png"
// import png-clipart-wedding-invitation-wedding-invitation-wedding-invitation-card-wedding-anniversary-text-thumbnail from "../../assets/images/envitation/png-clipart-wedding-invitation-wedding-invitation-wedding-invitation-card-wedding-anniversary-text-thumbnail.png"
import env from  "../../assets/images/envitation/env.png"
import Letter from "../../assets/images/envitation/Letter.png"
function Home() {
	
	  
	return (
	<>
	  <div className='blog'>
		
      <p><h3 style={{fontSize:"15px"}}><b> Create and share all types of beautfull documentation </b></h3>  </p>
      <p style={{fontSize:"17px"}}>The versatile online document software that will streamline the creation of your proposals, reports, white papers, ebooks, survey results and other types of documents.</p>
			<div className='container grid3'>
				    <div className='box boxItems'>
				<div className='img'>
			                <div class="thumb">   
				<div className="inner-content">
                                <h4 style={{color:"grey"}}>Formal letter
                                    </h4>
                                <span><b>Awesome and clean</b>  </span>
                                <div className="main-border-button">
                                  <Link to="/Letters">
                                    <button className='btn' >View All</button></Link>
                                </div>
                            </div>
					<img src={Letter} alt="" width={190} />
							</div>
				</div>
				
			        </div>
					<div className='box boxItems'>
				<div className='img'>
					
					<div className="thumb">
                            <div className="inner-content">
                                <h4>Envitation card
                                    </h4>
                                <span><b>Awesome and clean</b>  </span>
                                <div className="main-border-button">
                                <Link to="/Letters"><button className='btn' >View All</button> </Link> 
                             
                                </div>
                            </div>
                           <img src={env} alt="" />
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
				<button className='button'><Link to="/Create">Create your Oun documentation</Link> </button>
			        </div>
			{/* header ends */}
			{/* midd page starts */}

			</div>
{/* first floww */}

<div className='header'>

<div className="slide">



</div>


      <div className='container grid9'>
		

{/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quia nostrum reiciendis aut maxime repellat at nulla accusantium. Ipsa possimus in porro similique adipisci esse cumque fuga accusantium voluptatem deserunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam at reiciendis sit ut quae perspiciatis nihil atque aspernatur. Consequatur sequi dolorem commodi, voluptatibus animi voluptatem iste culpa molestiae laudantium repudiandae. </p> */}
<p><h2>Our easy-to-use, fully customizable document templates give you a quick and easy starting point to create your documents. Our hundreds of professionally designed document templates contain carefully researched and crafted content to make it easier for you to create your next document.</h2> </p>
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
{/* <Slideshow /> */}

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
      <p>Just ...some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
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

{/* next stage */}
<div className="container">
 
    <h3>Everything to spice up your documents</h3>
   <p><h2>
Ramp up your document design with our huge range of assets. Tap into over 40 charts, graphs, maps, tables, data widgets and icons to transform stats and figures into snackable visuals in your documents.
    </h2></p>
</div>
			<div className="share">
<div className="center">
<div className='container grid3'>
<div className='box boxItems'>
	<div><Link to="">
	<BiDownload className='icon' />
	<h3>Download Documents to use it</h3>
	<label htmlFor="share">Use offline as high quality PDF ,Images</label></Link>
	</div>
</div>

<div className='box boxItems'>
	<div><Link to="">
	<BiKey className='icon' />
	<h3>Use Document privately</h3>
	<label htmlFor="share">Use Documents privatly protected by password </label></Link>
	</div>
</div>

<div className='box boxItems'>
	<div><Link to="">
	<BiMouse className='icon' />
	<h3>Brourse all</h3>
	<label htmlFor="share">Send you a link on email</label></Link>
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
    
    <App/>
      <h3>Bussiness card</h3>
      <p>The best card for your bussiness or your proffessional worker.</p>
    </div>
	</div>
	
   

  </div>
  </div>

<div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"100px"}}>


  <div className="w3-row-padding w3-padding-16 w3-center" >
    <div className="w3-quarter">
    <Link to="/View"><Appstudent/> </Link> 
    <br />
    <br />
      <h3>Students card</h3>
      <p>Just some schools need to identify their students and make them secure by id of schools.</p>
    </div>
	</div>
	
   

  </div>

  </div>


  <div className='box boxItems'>
<div className="w3-main w3-content w3-padding" style={{width:"100%", marginTop:"100px"}}>


  <div className="w3-row-padding w3-padding-16 w3-center" >
    <div className="w3-quarter">
<HomeEnv/>
    <br />
    <br />
    <hr />
      <h3>Envitation Card</h3>
      <p>Wedding Envitation ,simply wonderfull celemony.</p>
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
  