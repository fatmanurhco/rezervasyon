// import "../App.css";
// import SliderImg from "../compoments/SliderImg";
// import React from 'react';
// import Lightbox from 'react-image-lightbox'; // Assuming lightbox integration

// const GalleryItem = ({ image }) => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const openLightbox = () => setIsOpen(true);
//   const closeLightbox = () => setIsOpen(false);

//   return (
//     <div className="gallery-item">
//       <div className="gallery-image">
//         <img src={image.src} alt={image.alt} onClick={openLightbox} />
//       </div>
//       <div className="gallery-content">
//         <ul>
//           <li>
//             <a href={image.src} data-lightbox="gallery" data-title={image.alt}>
//               <i className="fa fa-eye"></i> View
//             </a>
//           </li>
//         </ul>
//       </div>
//       {isOpen && (
//         <Lightbox
//           mainSrc={image.src}
//           onCloseRequest={closeLightbox}
//           reactModalProps={{  
//             enableZoom: false, 
//             showImageInfo: true
//           }}
//         />
//       )}
//     </div>
//   );
// };

// const Gallery = () => {

//   const galleryImages = SliderImg.galleryimages;

//   return (
//     <>
//       {galleryImages && ( 
//         <section className="content gallery" data-ref="container-1">
//           <div className="container">
//             <div className="gallery-box">
//               {galleryImages.map((image) => ( 
//                 <div className="photo" key={image.src}>
//                   <GalleryItem image={image} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </>
//   );
// };

// export default Gallery;