import React from 'react'
import App from '../../posts/bussiness/App'
import blog from "../../assets/data/data"

function View() {
  return (
   <>
   
   <p style={{visibility:"hidden"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui deserunt ipsa quam reiciendis sunt odio hic iste laboriosam, non amet culpa eos aliquid corrupti aspernatur totam voluptatem vel omnis ut?</p>
   <section className='blog'>
       <div className='container'>
    
       <div className='container grid3'>
    
          {blog.map((item) => (
              
        
                <div className='box boxItems' key={item.id}>
               
                <div className='img'>
                  <Link to={`/details/${item.id}`}>
                    <img src={item.cover} alt='' />
                    </Link>
                  </div>
                
                
                  
                </div>
                 ))},
           
            </div>

     < App />
     
           
            </div>

        
   
        
          </section>

   </>
  )
}

export default View