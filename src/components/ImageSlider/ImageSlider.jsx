import React, { useState, useEffect } from 'react';
import img1 from '../Images/image1.png';
import img2 from '../Images/image2.png';
import img3 from '../Images/image3.png';
import img4 from '../Images/image4.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

export const ImageSlider = () => {
  const slides = [
    { url: img1, title: 'Women Painting' },
    { url: img3, title: 'Girl Painting 1' },
    { url: img4, title: 'Girl Painting 2' },
    { url: img2, title: 'Abstract Art' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sliderStyles = {
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  };

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const arrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  };

  const leftArrowStyles = {
    ...arrowStyles,
    left: '10px',
  };

  const rightArrowStyles = {
    ...arrowStyles,
    right: '10px',
  };

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '10px',
    gap: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  const dotStyles = (isActive) => ({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: isActive ? '#fff' : '#000',
    cursor: 'pointer',
  });

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        goToNext();
      }, 2000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  return (
    <div
      style={sliderStyles}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div style={slideStyles}></div>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        <ArrowBackIosIcon />
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        <ArrowForwardIosIcon />
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyles(currentIndex === slideIndex)}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};


// import React from 'react';
// import { Slideshow } from './Slides';
// import img1 from '../Images/image1.png';
// import img2 from '../Images/image2.png';
// import img3 from '../Images/image3.png';
// import img4 from '../Images/image4.png';

// export const ImageSlider = () => {
//   const slides = [
//     { url: img1, title: "wonen painting" },
//     { url: img3, title: "girl painting" },
//     { url: img4, title: "girl paintings" },
//     { url: img2, title: "girl painting" },
//   ];

//   return (
//     <div style={{ width: '900px', height: '500px', margin: '0 auto' }}>
//       <Slideshow slides={slides} />
//     </div>
//   );
// };


// // import React from 'react'
// // import { useState } from 'react';
// // import img1 from '../Images/image1.png';
// // import img2 from '../Images/image2.png';
// // import img3 from '../Images/image3.png';
// // import img4 from '../Images/image4.png';
// // import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// // import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// // // import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// // import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

// // export const ImageSlider = () => {
// //   const slides = [
// //     { url: img1, title: "wonen painting"},{url: img3, title: "girl painting"},{url: img4, title: "girl paintings"},{url: img2, title: "girl painting"} 
// //     ];
// //   const [currentIndex, setCurrentUser] = useState(0);
// //   const sliderStyles = {
// //     height: '100%',
// //     position: 'relative',
// //     // backgroundColor: 'rgb(227, 230, 234)'
// //     // background-color: 'rgb(227, 230, 234)',
// //   };
// //   const slideStyles = {
// //     width: '100%',
// //     height: '100%',
// //     borderRadius: '10px',
// //     backgroundPosition: 'center',
// //     backgroundSize: 'cover',
// //     overflow: 'visible',
// //     overflow: 'hidden',

// //     // max-width: '300px',
// //     backgroundImage: `url(${slides[currentIndex].url})`,
// //     // backgroundSize: 'contain',  // Ensures the entire image fits without cropping
// //     backgroundRepeat: 'no-repeat', // Prevents image tiling
// //     transform: 'scaleX(1.1)',
// //     backgroundColor: 'rgb(227, 230, 234)'
// //   };
// //   const leftArrowStyles = {
// //     position: 'absolute',
// //     top: '50%',
// //     left: '10px',
// //     transform: 'translateY(-50%)',
// //     fontSize: '24px',
// //     color: '#fff',
// //     zIndex: 1,
// //     cursor: 'pointer',
// //   };

// //   const rightArrowStyles = {
// //     position: 'absolute',
// //     top: '50%',
// //     right: '10px',
// //     transform: 'translateY(-50%)',
// //     transform: 'translate(0, -50%)',
// //     // fontSize: '24px',
// //     fontSize: '45px',
// //     color: '#fff',
// //     zIndex: 1,
// //     cursor: 'pointer',
// //   };
// //   const dotsContainerStyles= {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     position: 'absolute',
// //     bottom: '10px',
// //     gap: '10px',
// //     left: '50%',
// //     transform: 'translateX(-50%)'
// //   }
// //   const dotStyles = (isActive) =>({
// //     margin: '0 3px',
// //     cursor: 'pointer',
// //     fontSize: '10px',
// //     // backgroundColor: isActive ? '#fff' : '#000', // White for active, black for inactive
// //     // cursor: 'pointer',
// //     // transition: 'background-color 0.3s ease'
// //     // transition: '0.3s ease'
// //     backgroundColor: '#fbfbfb', // Inner dot is black
// //     transition: 'width 0.3s ease, height 0.3s ease',
// //     width: '10px', // Outer dot size
// //     height: '10px',
// //     borderRadius: '50%',
// //     border: '1px solid #000', // Border remains constant
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     cursor: 'pointer',
// //   });
// //   const goToPrevious=() => {
// //     const isFirstSlide = currentIndex === 0
// //     const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1;
// //     setCurrentUser(newIndex);
// //   };
// //   const goToNext=() => {
// //     const isLastSlide = currentIndex === slides.length-1
// //     const newIndex = isLastSlide ? 0 :currentIndex + 1;
// //     setCurrentUser(newIndex);
// //   };
// //   const goToSlide = slideIndex => {
// //     setCurrentUser(slideIndex);
// //   }
// //   return (
// //     <div style={sliderStyles}>
// //         <div style={slideStyles}>
// //         <div style={leftArrowStyles} onClick={goToPrevious}> <ArrowBackIosIcon></ArrowBackIosIcon></div>
// //         <div style={rightArrowStyles} onClick={goToNext}><ArrowForwardIosIcon></ArrowForwardIosIcon></div>
// //         <div style={dotsContainerStyles}>
// //             {slides.map((slide, slideIndex) => (
// //                 <div key={slideIndex} style={dotStyles(currentIndex === slideIndex)} onClick={()=>goToSlide(slideIndex)}><FiberManualRecordOutlinedIcon></FiberManualRecordOutlinedIcon>
// //                     {/* <img src={slide.url} alt={slide.title} /> */}
// //                     {/* <p>{slide.title}</p> */}
// //                 </div>
// //             ))} 
// //         </div>
// //         </div>
// //     </div>
// //   )
// // }
