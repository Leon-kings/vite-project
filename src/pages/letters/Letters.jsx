import React from 'react'
import { letter } from '../../assets/data/data'
import "../../css/posts/letter.css"
import { Link } from 'react-router-dom'

function Letters() {
  return (
    <>
   <section className='blog'>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas maiores omnis molestiae vero, doloremque, laborum numquam quas eius itaque est dolorum aliquam error soluta dicta ex delectus nisi sunt ipsam!</p>
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

export default Letters