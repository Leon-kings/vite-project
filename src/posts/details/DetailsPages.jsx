import React, { useState } from "react"
import "../../css/posts/details/single.css"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import blogPost from '../../pages/cv/blog.json';

function DetailsPages () {
 
  const { id } = useParams()
  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    const posts = blogPost.data;
    setPosts(posts);
  }, posts);


  return (
    <>
      {posts ? (
        <section className='singlePage'>
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
export default DetailsPages