// import React, { useState } from 'react'
// import { useParams } from "react-router-dom"
// import { useEffect } from "react"
// import blogPost from '../blog.json';

// function DetailsS() {

//     const { id } = useParams()
//     const [posts, setPosts] = useState([]);
  
//     useEffect(()=>{
  
//       const posts = blogPost.data;
//       setPosts(posts);
//     }, posts);


//   return (
//     <>
//      {blogs ? (
//         <section className='singlePage'>
//           <div className='container'>
//             <div className='left'>
//               <img src={blogs.blogImage.id} alt='' />
//             </div>
           
//           </div>
//         </section>
//       ) : null}
    
//     </>
//   )
// }

// export default DetailsS






import React, { useState, useEffect } from 'react';
import blogPost from '../blog.json';
import { Link } from 'react-router-dom';


const Sidebar  = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    const posts = blogPost.data;
    setPosts(posts);
  }, posts);

  return(
    <>
    <section className='blog'>
      <div className="container grid3">
    

{
  posts.map(post => {

    return(

     






      

      <div >


<div className='box boxItems' key={post.id}>
  <div className="Img">
  <Link to={`/details/${post.id}`}>
<img style={{width: "50%",height:"50%",display:"flex",flexDirection:"row"}} src={post.blogImage}/>
</Link>
   </div>
</div>


</div>


      //  </div>
           
     




    )

  })
}

    </div>
    </section>
    </>
   )

 }

export default Sidebar;
