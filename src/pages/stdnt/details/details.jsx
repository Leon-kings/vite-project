
import React, { useState } from "react"
import Screenshoot from "../../../assets/images/New folder/Screenshoot.png"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import blogPost from '../blog.json';

export const DetailsPages = () => {
  const { id } = useParams()
  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    const posts = blogPost.data;
    setPosts(posts);
  }, posts);

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <img src={Screenshoot} alt="" />
          <div className='container'>
            <div className='left'>
              <img src={posts.blogImage.id} alt='' />
            </div>
           
          </div>
        </section>
      ) : null}
    </>
  )
}
