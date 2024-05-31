

import React from 'react';
import image1 from '../assets/download.jpeg';
import image2 from '../assets/cat2.jpeg';
import image3 from '../assets/catbowtie.jpeg';

const Avatar = () => {
  const images = [
    { src: image1, alt: 'download' },
    { src: image2, alt: 'cat2' },
    { src: image3, alt: 'catbowtie' }
  ];

  return (
    <div className="avatar">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default Avatar;
