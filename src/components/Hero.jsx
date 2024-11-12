import React, { useEffect, useState } from 'react'
import hero1 from '../assets/hero1.avif';
import hero5 from '../assets/hero5.png';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.jpeg';
import hero2 from '../assets/hero2.jpg';

const Hero = () => {
    const images=[
      hero1, hero2,hero5, hero3,hero4
    ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, [images.length]);
  console.log("HeroBanner rendered");

  return (
    <div style={{ position: 'relative', width: '100%', height: '600px', overflow: 'hidden' }}>
      {images.map((image, index) => (
         <div
         key={index}
         style={{
          display:'flex',
           backgroundImage: `url(${image})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           width: '100%',
           height: '100%',
           position: 'absolute',
           top: 0,
           left: `${(index - currentIndex) * 100}%`,
           transition: 'left 0.5s ease-in-out',
         }}
       ></div>
     ))}
         </div>
  )
}

export default Hero