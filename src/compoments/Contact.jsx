// import { useEffect, useRef, useState } from "react";
// import { Link } from 'react-router-dom';
// import { supabase } from "../compoments/SupaBase";
// import "../App.css"



// export default function Contact()
// {


//   async function handleSubmit(e) {
//     e.preventDefault();
// }

//   return(
// <>
// <span className="theme">
//     <h2>iLETİŞİM</h2>
//   </span>

//     <div className="contact-container">
      
//   <div className="contact-boxes">
//     <div className="contact-box">
//       <h2>Müşteri Desteği</h2>
//       <p>Seyahatinizi en iyi şekilde planlamanız için her zaman yanınızdayız.</p>
//     </div>
//     <div className="contact-box">
//     <h2>Teknik Destek</h2>
//       <p>
// Herhangi bir teknik sorunla karşılaştığınızda, size yardımcı olmak için buradayız. </p>
//     </div>
//     <div className="contact-box">
//     <h2>Rezervasyon</h2>
//       <p>En uygun fiyatlarla ve kolay adımlarla seyahatinizi rezerve edin.</p>
//     </div>
//   </div>
//   <div className="content-form">
//     <div className="sec-content">
//         <div className="cont">
//           <img src="/icons/pin.png" alt="" />
//           <p>Kütahya Dumlupınar Üniversitesi</p>
//         </div>
//         <div className="cont">
//           <img src="/icons/call.png" alt="" />
//           <p>542-575-9482</p>
//         </div>
//         <div className="cont">
//           <img src="/icons/mail.png" alt="" />
//           <p>fatmanur.hacicaferoglu@gmail.com</p>
//         </div>
//         <div className="cont">
//           <img src="/icons/earth-globe.png" alt="" />
//           <p>rotamizkutahya.com.tr</p>
//         </div>
//     </div>
//     <div className="cont-form">
//     <form onSubmit={handleSubmit} autoComplete="off">
//                 <input required type="text" placeholder="Ad" name="name" />
//                 <input required type="text" placeholder="Soyad" name="surname" />
//                 <input required type="email" placeholder="E-Posta Adresi" name="email" />
//                 <input required type="tel" placeholder="Şifre" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
//                 <textarea name="requirements" id="" cols="30" rows="10"></textarea>
//                 <button>Next</button>
//             </form>
//     </div>
//   </div>
//     </div>
//     </>
//   )
// }