import React, { useState } from 'react';
import "../ReviewSlider.css";
import { galleryimages } from '../compoments/SliderImg';

const GalleryItem = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="gallery-item">
      <div className="gallery-image">
        <img src={image.src} alt={image.alt} onClick={openModal} />
      </div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={image.src} alt={image.alt} />
          </div>
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
  return (
    <>
     <span className="theme">
    <h2>GALERİ</h2>
  </span>
  
      {galleryimages && (
        
        <section className="content gallery" data-ref="container-1">
          <div className="container">
            <div className="gallery-box">
              {galleryimages.map((image, index) => (
                <div className="photo" key={index}>
                  <GalleryItem image={image} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Gallery;
