import React from 'react'
import { letter } from '../../assets/data/data'
import { Link } from 'react-router-dom'

function View() {
  return (
   <>
   
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui deserunt ipsa quam reiciendis sunt odio hic iste laboriosam, non amet culpa eos aliquid corrupti aspernatur totam voluptatem vel omnis ut?</p>
   <section className='blog'>
       <div className='container grid3'>
    
          {letter.map((item) => (
                
        
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

export default View