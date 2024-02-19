

// // import { Carousel } from "react-responsive-carousel";
// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import "../../css/components/slide/slide.css";
// // const images = [
// //           // "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
// //           // "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
// //           // "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
// //           "https://images.pexels.com/photos/272980/pexels-photo-272980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// // "https://images.pexels.com/photos/955389/pexels-photo-955389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// // "https://images.pexels.com/photos/48195/document-agreement-documents-sign-48195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// // "https://images.pexels.com/photos/8301233/pexels-photo-8301233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// // "https://png.pngtree.com/png-vector/20230503/ourlarge/pngtree-contemporary-corporate-document-with-12-slides-for-your-business-presentation-templates-vector-png-image_51890216.jpg"
// // ];
// // function App() {
// //   return (
// //     <div className="box" id="root">
// //             <div className='img'>
// //               <div class="thumb">
// //               <div className="inner-content">
// //                   <h4 style={{ color: "red" }}> Ramp up your document design with our huge range of assets. Tap into over 40 charts, graphs, maps, tables,
// //                    data widgets and icons to transform stats and figures into snackable visuals in your documents.
// //                   </h4>
                 
// //                 </div>
// //       <Carousel useKeyboardArrows={true}>
// //         {images.map((URL, index) => (
// //           <div className="slide">
// //             <img src={URL} key={index} />
// //           </div>
// //         ))}
// //       </Carousel>



               
// //                 {/* <img src={Letter} alt="" width={190} /> */}
// //               </div>
// //             </div>

      
// //     </div>
// //   );
// // }
// // export default App;





// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// const delay = 2500;

// function Slideshow() {
//   const [index, setIndex] = React.useState(0);
//   const timeoutRef = React.useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   React.useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === colors.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

//   return (
//     <div className="slideshow">
//       <div
//         className="slideshowSlider"
//         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//       >
//         {colors.map((backgroundColor, index) => (
//           <div
//             className="slide"
//             key={index}
//             style={{ backgroundColor }}
//           ></div>
//         ))}
//       </div>

//       <div className="slideshowDots">
//         {colors.map((_, idx) => (
//           <div
//             key={idx}
//             className={`slideshowDot${index === idx ? " active" : ""}`}
//             onClick={() => {
//               setIndex(idx);
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }



