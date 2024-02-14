import React, { useState } from "react"
import "./details.css"
// import "../../components/header/header.css"

// import { BsPencilSquare } from "react-icons/bs"
// import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { letter} from "../../assets/data/data"

export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

 useEffect(() => {
    let blogs = letter.find((blogs) => blogs.id === parseInt(id))
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
              <img src={letter.cover} alt='' />
            </div>

           
          </div>
        </section>
      ) : null}
    </>
  )
}
