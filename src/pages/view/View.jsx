import React from 'react'
// import { blog} from '../../assets/data/data'
import { Link } from 'react-router-dom'
const blog = [
  {
    id: 1,
    title: "Envitation",
    desc: "Wedding envitation ",
    category: "envitation",
    cover: "../../assets/images/envitation/Letter.png",

  },

  {
    id: 2,
    title: "Student card",
    desc: "Card of your students",
    category: "student",
    cover: "../../assets/images/envitation/Letter.png",

  },
  {
    id: 3,
    title: "Bussiness card",
    desc: "Are you owner of a business here you can pik a card for your business",
    category: "business",
    cover: "../g.jpg",

  },
  {
    id: 4,
    title: "Student card",
    desc: "Card of your students",
    category: "student",
    cover: "../images/blogs/download (1).jpg",

  },
  {
    id: 5,
    title: "Bussiness card",
    desc: "Are you owner of a business here you can pik a card for your business",
    category: "business",
    cover: "../images/blogs/images (1).jpg",

  },
  {
    id: 6,
    title: "Student card",
    desc: "Card of your students",
    category: "student",
    cover: "../images/download.jpg",

  },
  {
    id: 7,
    title: "Bussiness card",
    desc: "Are you owner of a business here you can pik a card for your business",
    category: "business",
    cover: "../images/download.jpg",

  },
]  
function View() {
  return (
   <>
   
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui deserunt ipsa quam reiciendis sunt odio hic iste laboriosam, non amet culpa eos aliquid corrupti aspernatur totam voluptatem vel omnis ut?</p>
   <section className='blog'>
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
        
   
        
          </section>

   </>
  )
}

export default View