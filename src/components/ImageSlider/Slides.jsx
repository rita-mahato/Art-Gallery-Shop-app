import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

export const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: '100%',
    position: 'relative',
  };

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transform: 'scaleX(1.1)',
    backgroundColor: 'rgb(227, 230, 234)',
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    fontSize: '24px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  };

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
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
    margin: '0 3px',
    cursor: 'pointer',
    fontSize: '10px',
    backgroundColor: '#fbfbfb',
    transition: 'width 0.3s ease, height 0.3s ease',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: '1px solid #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

  return (
    <div style={sliderStyles}>
      <div style={slideStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>
          <ArrowBackIosIcon />
        </div>
        <div style={rightArrowStyles} onClick={goToNext}>
          <ArrowForwardIosIcon />
        </div>
        <div style={dotsContainerStyles}>
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              style={dotStyles(currentIndex === slideIndex)}
              onClick={() => goToSlide(slideIndex)}
            >
              <FiberManualRecordOutlinedIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
