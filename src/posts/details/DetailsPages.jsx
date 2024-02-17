import React, { useState } from "react"
import "../../css/posts/details/single.css"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
// import download from "../../assets/images/dounload.jpg"

function DetailsPages () {
  const blog = [
    {
      id: 1,
      title: "Envitation",
      desc: "Wedding envitation ",
      category: "envitation",
      // cover: "../../",
  
    },
  
    {
      id: 2,
      title: "Student card",
      desc: "Card of your students",
      category: "student",
      cover: "../images/download.jpg",
  
    },
    {
      id: 3,
      title: "Bussiness card",
      desc: "Are you owner of a business here you can pik a card for your business",
      category: "business",
      cover: "../images/download.jpg",
  
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
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

 useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blog.cover} alt='' />
            </div>

           
          </div>
        </section>
      ) : null}
    </>
  )
}
export default DetailsPages