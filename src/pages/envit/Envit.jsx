import React from 'react'
import { Envitation } from '../../assets/data/data'
import "../../css/posts/envit.css"
function Envit() {
  return (
    <>
    
    <section className='blog'>
       <div className='container grid3'>
    
          {Envitation.map((item) => (
                
        
                <div className='box boxItems' key={item.id}>
               
                  <div className='img'>
                  <Link to={`/details/${item.id}`}>
                    <img src={item.cover} alt='' />
                    </Link>
                  </div>
                  
                
                  
                </div>
                 ))},
           
            </div>
        
  
          </section>
    
    </>
  )
}

export default Envit