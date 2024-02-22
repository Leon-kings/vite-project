
import React, { useState } from "react"
// import "../../../css/posts/details/single.css"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import blogPost from '../blog.json';

export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

 useEffect(() => {
    let blogs = blogPost.find((blogs) => blogs.id === parseInt(id))
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
              <img src={blogs.cover} alt='' />
            </div>
           
          </div>
        </section>
      ) : null}
    </>
  )
}
