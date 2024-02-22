// import React, { useState } from "react"
// import "../../css/posts/details/single.css"
// import { useParams } from "react-router-dom"
// import { useEffect } from "react"
// import blogPost from '../../pages/cv/blog.json';

// function DetailsPages () {
 
//   const { id } = useParams()
//   const [posts, setPosts] = useState([]);

//   useEffect(()=>{

//     const posts = blogPost.data;
//     setPosts(posts);
//   }, posts);


//   return (
//     <>
//       {posts ? (
//         <section className='singlePage'>
//           <div className='container'>
//             <div className='left'>
//               <img src={posts.blogImage.id} alt='' />
//             </div>

           
//           </div>
//         </section>
//       ) : null}
//     </>
//   )
// }
// export default DetailsPages

import React, { useState } from "react"
import "../../css/posts/details/single.css"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import blogPost from '../../posts';

export const DetailsPages = () => {
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
              <img src={blogs.cover} alt='' />
            </div>
           
          </div>
        </section>
      ) : null}
    </>
  )
}
