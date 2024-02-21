// import React, { useState, useEffect } from "react";
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import { FaQuoteRight } from "react-icons/fa";
// import data from "./data";
// import "./style.css"
// function AppSlide() {
//   const [people, setPeople] = useState(data);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const lastIndex = people.length - 1;
//     if (index < 0) {
//       setIndex(lastIndex);
//     }
//     if (index > lastIndex) {
//       setIndex(0);
//     }
//   }, [index, people]);

//   // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1);
//     }, 3000);
//     return () => clearInterval(slider);
//   }, [index]);

//   return (
//     <section className="section">
//       <div className="title">
//         <h2>
//           <span>/</span>Online Documents
//         </h2>
//       </div>
//       <div className="section-center">
//         {people.map((person, personIndex) => {
//           const { id, image, name, title, quote } = person;
//           let position = "nextSlide";
//           if (personIndex === index) {
//             position = "activeSlide";
//           }
//           if (
//             personIndex === index - 1 ||
//             (index === 0 && personIndex === people.length - 1)
//           ) {
//             position = "lastSlide";
//           }
//           return (
//             <article key={id} className={position}>
//               <img src={image} alt={name} className="person-img" />
//               <h4>{name}</h4>
//               <p className="title">{title}</p>
//               <p className="text">{quote}</p>
//               {/* <FaQuoteRight className="icon" /> */}
//             </article>
//           );
//         })}
//         <button className="prev" onClick={() => setIndex(index - 1)}>
//           <FiChevronLeft />
//         </button>
//         <button className="next" onClick={() => setIndex(index + 1)}>
//           <FiChevronRight />
//         </button>
//       </div>
//     </section>
//   );
// }

// export default AppSlide;


import React, { useState, useEffect } from 'react';
// import blogPost from './blog.json';
import { NavLink } from 'react-router-dom';


const Sidebar  = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    const posts = blogPost.data;
    setPosts(posts);
  }, posts);

  return(

    <div>

{
  posts.map(post => {

    return(

     


      <div >


<img style={{width: "100%"}} src={post.blogImage}/>
   

<NavLink key={post.id} to={`/post/${post.id}`}>  <div className = "post-title">{post.blogTitle}</div>  </NavLink>




       </div>
           
     




    )

  })
}

    </div>
   )

 }

export default Sidebar;
