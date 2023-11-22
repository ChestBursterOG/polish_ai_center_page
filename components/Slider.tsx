// Carousel.js
import { useState, useEffect } from 'react';
import styles from './Slider.module.css'; // Create a CSS module for styling

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [restartCarousel, setRestartCarousel] = useState(false);

  useEffect(() => {
    const handleResize = () => {

        setRestartCarousel(true);

      const windowWidth = window.innerWidth;

      if (windowWidth >= 1024) {
        setVisibleSlides(3);
      } else if (windowWidth >= 768) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };

    // Set initial visible slides based on window width
    handleResize();

    // Attach resize event listener
    window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener('resize', handleResize);
    };

  }, []);
  
  useEffect(() => {
    if (restartCarousel) {
        setCurrentIndex(0);
        setRestartCarousel(false);
      }
      
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - visibleSlides + 1));
    }, 5000);


    return () => clearInterval(interval); // Cleanup interval on component unmount

  }, [currentIndex, images.length, visibleSlides]);

  return (
    <div className={styles.carousel}>
      <div className={styles.slideContainer} style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide} style={{ flex: `0 0 ${100 / visibleSlides}%` }}>
            <img className={styles.img} src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
