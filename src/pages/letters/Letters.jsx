import React from 'react'
// import { letterimage } from '../../assets/data/data'
import "../../css/posts/letter.css"
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
function Letters() {
  return (
    <>
   <section className='blog'>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas maiores omnis molestiae vero, doloremque, laborum numquam quas eius itaque est dolorum aliquam error soluta dicta ex delectus nisi sunt ipsam!</p>
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

export default Letters