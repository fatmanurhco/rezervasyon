import { Link } from 'react-router-dom';
import React from 'react';
import "../App.css"

const Footer = () => {
  return(
    <>
<div className="footer">
  <div className="help">
    <h3>Yardıma mı ihtiyacın var?</h3>
    
    <span className='help-span'>
      <span>
    <p>Sorun mu var? 7/24 bizi arayabilirsin!</p>
    <p className="footer-call"><span className="redfooter">Bize Ulaş:</span>(542)575 9482</p>
    </span>
    </span>
    <div className="footer-contact">
    <h3>İletişim Bilgisi</h3>
    
    <span>
      <p>Bize Ulaş:(542)575 9482</p>
      <p>Konum: Kütahya Dumlupınar Üniversitesi</p>
    </span>
    <div className="social-media">
      <Link to="/"><img src="/icons/facebook-logo.png" alt="facebook" /></Link>
      <Link to="/"><img src="/icons/twitter.png" alt="twitter" /></Link>
      <Link to="/"><img src="/icons/instagram.png" alt="instagram" /></Link>
      <Link to="/"><img src="/icons/linkedin.png" alt="linkedn" /></Link>
    </div>
  </div>
  </div>
 
  <div className="footer-company">
    <h3>Company</h3>
    
    <div className="company-links">
      <Link to="/about-us">Hakkımızda</Link>
      <Link to="/faq">S.S.S</Link>
      <Link to="/">Şartlar ve koşullar</Link>
    </div>
  </div>
  <div className="footer-support">
    <h3>Support</h3>
    
    <div className="support-links">
      <Link to="/contact">İletişim</Link>
      <Link to="/about-us">Hakkımızda</Link>
     
    </div>
  </div>
  <div className="footer-mailing">
    <h3>Mail Listesi</h3>
  
    <p>Son gelişmelerden ve kampanyalardan haberdar olmak için mailini bırak!</p>
    <input type="email" name="" id="" className="footer-input" placeholder='Mail Adresiniz'/>
    <a href="#" className="btn btn-banner btn-footer">ÜYE OL</a>
    </div>
    
</div>
<div className="footer-bottom">
  <p>2020 Nepayatri. All rights reserved.</p>
  <span className="bottom-link">

  
  <Link to="/">Anasayfa</Link>
  <Link to="/about-us">Hakkımızda</Link>
  <Link to="/faq">S.S.S</Link>
  <Link to="/contact">Bize ulaş</Link>
  </span>
</div>
</>
  )
};

export default Footer;