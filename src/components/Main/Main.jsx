import React from 'react'
import './Main.css'
import Slider from 'react-slick'; // npm install react-slick slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Main.css'; // Import CSS for custom styling
import Img1 from '../Images/image1.png'

export const Main = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
  return (
    <div className="carousel-container">
      {/* Carousel Section */}
      <Slider {...settings}>
        <div>
          <img
            src={ Img1 }
            alt="Slide 1"
            className="Auroras-image"
          />
        </div>
        {/* <div>
          <img
            src="/path/to/image2.jpg"
            alt="Slide 2"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="/path/to/image3.jpg"
            alt="Slide 3"
            className="carousel-image"
          />
        </div> */}
      </Slider>
    </div>
  )
}
function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <div className={`${className} custom-next-arrow`} onClick={onClick} />;
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <div className={`${className} custom-prev-arrow`} onClick={onClick} />;
  }
