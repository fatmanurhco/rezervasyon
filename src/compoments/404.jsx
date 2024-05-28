import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="error error-1">
      <div className="container">
        <div className="error-content text-center">
          <h3>Oops! Sayfa Bulunamadı </h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
          <h2 className="mar-0">Üzgünüm, Aradığınız Sayfa Bulunamadı.</h2>
          <div className="error-btn">
            <Link to="/" className="biz-btn biz-btn1 mar-right-10">
              ANASAYFAYA GİDİN
            </Link>
            <Link to="/contact" className="biz-btn-black">
              BİZE ULAŞIN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;