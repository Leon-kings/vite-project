

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../css/components/slide/slide.css";
const images = [
          "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
          "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          "https://images.pexels.com/photos/272980/pexels-photo-272980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/955389/pexels-photo-955389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/48195/document-agreement-documents-sign-48195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/8301233/pexels-photo-8301233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];
function App() {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>




      
    </div>
  );
}
export default App;



