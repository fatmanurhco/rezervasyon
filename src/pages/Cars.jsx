import "../App.css"
import { useState } from "react";
import DataCity  from "../compoments/DataCity"
import { Calendar } from 'primereact/calendar';
import { Slider } from 'primereact/slider';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay } from 'swiper/modules';
import { carsimages } from '../compoments/SliderImg';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

export function MainSwiper() {


  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      centeredSlides={true}
      autoplay={{
        delay: 60000,
        disableOnInteraction: false,
      }}
      navigation
      speed={5000}
    >
       {carsimages.map(image => (
        <SwiperSlide key={image.id}>
          <div className="slide-content">
            <div className="inner-content">
              <h1>{image.title}</h1>
              <p>{image.body}</p>
              {image.buttons.map(button => (
                <Link className="btn" key={button.id} to={button.link} >{button.label}</Link>
              ))}
            </div>
          </div>
          <div className="slide-image" style={{ backgroundImage: `url(${image.url})` }}></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}




export default function Araba()
{
  const [date, setDate] = useState(null);
  const [value, setValue] = useState(50);  // Başlangıç değeri verildi
   
      
  return(
    <>
   <div className="slider">
        <MainSwiper />
      </div>
    <div className="home">
      
      <div className="booking">
      <div className="bookform">
            <form>
            <label>Araç Markası</label>
              <select name="araba" className="secim" >
                {DataCity.dataAraba.map((car) => (
                <option key={car.plaka} value={car.plaka}>{car.il}</option>))}</select>
            
            <label>Alış Tarihi</label>
              <Calendar className="calendar"  value={date} onChange={(e) => setDate(e.value)} placeholder="dd-mm-yy" />
            
            <label>Bırakış Tarihi</label>
              <Calendar className="calendar"  value={date} onChange={(e) => setDate(e.value)} placeholder="dd-mm-yy" />
              <label>Fiyat Aralığı</label>
              <InputText value={value} onChange={(e) => setValue(e.target.value)} />
              <Slider value={value} onChange={(e) => setValue(e.value)} />
            <button className="btn form-btn">Hemen Bul</button>
          </form>

        </div>
      </div>
      <div className="section-chooseus section-howitworks">
        <h2>How It Works</h2>
        <span className="underline"></span>
        <p>Seyahat planlamak, heyecan verici olduğu kadar stresli de olabilir. Doğru destinasyonu seçmek, konaklama ayarlamak, ulaşım ve aktiviteleri organize etmek kafa karıştırıcı olabilir. 
          İşte tam da bu noktada size yardımcı olmak için devreye giriyoruz!</p>
        <div className="innfoboxes">
          <div className="box">
            <img src="/icons/price-tag.png" alt="pricing" />
            <h3>Select Your Car</h3>
            <p>Select your car, choose your location, time and pick it up</p>
          </div>
          <div className="box">
          <img src="/icons/award.png" alt="service" />
            <h3>Define Your Booking</h3>
            <p>Fill your information into the form and go to next step</p>
          </div>
          <div className="box">
          <img src="/icons/earth-globe.png" alt="coverage" />
            <h3>Cheap Payment</h3>
            <p>Select your payment, click ok and It's all done for</p>
          </div>
        </div>
      </div>
      </div>
      <div className="featured-cars">
        <div className="featuredcars-inf ">
          <span className="fcars">
            <h2>Featured Cars</h2>
            <p>Dünyayı keşfetmeye hazır olun! Muhteşem manzaralardan büyüleyici kültürlere kadar,
               en iyi destinasyonlar sizi bekliyor.</p>
          </span>
        </div>
        <div className="cars">
     
      
         </div>

      </div>
      <div className="home">
        <div className="tellus">
            <div className="tellus-content">
                <h3>Tell Us Where You Would Like To Go.</h3>
                <div className="tellusbox">
                    <h2><span>25%</span>off</h2></div>
            </div>
                <h2>3,000+ VIP Transport Options!</h2>
                <button className="btn form-btn">SEARCH MORE OPTIONS</button>
        </div>
        </div>
        <div className="hire-cars">
        <div className="hirecars-inf ">
          <span className="hcars">
            <h2>Top Hire Cars</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, harum.</p>
          </span>
        </div>
        <div className="hire-cars">
     
      
         </div>

      </div>
      <div className="happy-with-us">
        <div className="hwu-inf ">
          <span className="hwu">
            <h2>More Than 960+ People Are Happy With Us.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquam excepturi maiores sed blanditiis quae aspernatur consequatur fugiat ut? Quia!</p>
          </span>
        </div>
        <div className="mention">
      
         </div>

      </div>
      <div className="home">
      <div className="recent-activites">
        <div className="recent-inf">
          <h2>Recent Activities</h2>
      <span className="underline"></span>
          <p>Lorem Ipsum is simply dummy text the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s,</p>
        </div>
        <div className="act-card">
          <img src="" alt="" />
          <div className="act-content">
            <label></label>
            <h3></h3>
            <p></p>
            <a href="#" className="btn btn-banner">VIEW DETAILS</a>
          </div>
        </div>
        <div className="act-card">
          <img src="" alt="" />
          <div className="act-content">
            <label></label>
            <h3></h3>
            <p></p>
            <a href="#" className="btn btn-banner">VIEW DETAILS</a>
          </div>
        </div>
        <div className="act-card">
          <img src="" alt="" />
          <div className="act-content">
            <label></label>
            <h3></h3>
            <p></p>
            <a href="#" className="btn btn-banner">VIEW DETAILS</a>
          </div>
        </div>
      </div>
      
      

    </div>
    </>
  )
}