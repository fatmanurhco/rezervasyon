import "../App.css"
import { useState } from "react";
import DataCity  from "../compoments/DataCity"
import { Calendar } from 'primereact/calendar';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay } from 'swiper/modules';
import { hotelimages} from '../compoments/SliderImg';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';


export function TravelCard()
{
  // return(
  // <Swiper
  // className="swiper swiperdeal"
  //   modules={[Navigation, Autoplay]}
  //   centeredSlides={true}
  //   autoplay={{
  //     delay: 60000,
  //     disableOnInteraction: false,
  //   }}
  //   navigation
  //   speed={5000}
  // >
     
  //    {travels.map(deal => (
  //       <SwiperSlide 
  //         className="swiper-slide slide-deal"
  //         key={deal.id}>
  //         <img src={deal.img} alt={deal.country} />
  //         <div className="deal-content">
  //           <h6>{deal.country}</h6>
  //           <h4>{deal.title}</h4>
  //           <p>With upto 30% Off, experience Europe your way!</p>
  //           <p className="price">From $250.00</p>
  //         </div>

  //       </SwiperSlide>
  //     ))}
  // </Swiper>
  // );
}


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
       {hotelimages.map(image => (
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
export default function Hotel()
{
 const[date, setDate]=useState()
    return(
    <>
   <div className="slider">
        <MainSwiper />
      </div>
    <div className="home">
      
      <div className="booking">

      <div className="bookform">
            <form>
            <label>Your Destination</label>
              <select name="il" className="secim" >
                {DataCity.dataCity.map((city) => (
                <option key={city.plaka} value={city.plaka}>{city.il}</option>))}</select>
            
            <label>Gidiş Tarihi</label>
              <Calendar className="calendar"  value={date} onChange={(e) => setDate(e.value)} placeholder="dd-mm-yy" />
            
            <label>Çıkış Tarihi</label>
              <Calendar className="calendar"  value={date} onChange={(e) => setDate(e.value)} placeholder="dd-mm-yy" />
            
            <label>Kişi Sayısı</label>
              <select name="adult" className="secim">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <label>Otel Tipi</label>
              <select name="hotel-types" className="secim">
                <option value="1">High Class</option>
                <option value="2">Middle Class</option>
                <option value="3">Low Class</option>
              </select>
          
            <button className="btn form-btn">Hemen Bul</button>
          </form>

        </div>
      </div>
      <div className="section-chooseus">
        
        <div className="innfoboxes">
          <div className="box">
            <img src="/icons/price-tag.png" alt="pricing" />
            <h3>Advice & Support</h3>
            <p>Travel worry free knowing that we're here if you need us,24 hours a day</p>
          </div>
          <div className="box">
          <img src="/icons/award.png" alt="service" />
            <h3>Air Ticketing</h3>
            <p>Travel worry free knowing that we're here if you need us,24 hours a day</p>
          </div>
          <div className="box">
          <img src="/icons/earth-globe.png" alt="coverage" />
            <h3>Hotel Accomodation</h3>
            <p>Travel worry free knowing that we're here if you need us,24 hours a day</p>
          </div>
          <div className="box">
          <img src="/icons/earth-globe.png" alt="coverage" />
            <h3>Tour Peckages</h3>
            <p>Travel worry free knowing that we're here if you need us,24 hours a day</p>
          </div>
        </div>
      </div>
      </div>
      <div className="top-dest">
        <div className="dest-inf red">
          <span className="dest">
            <h2>Top Most Destination</h2>
            <p>Dünyayı keşfetmeye hazır olun! Muhteşem manzaralardan büyüleyici kültürlere kadar,
               en iyi destinasyonlar sizi bekliyor.</p>
          </span>
        </div>
        <div className="destinations">
      
      
    </div>

      </div>
      <div className="home">
      <div className="explore-rooms">
        <div className="room-inf">
          <h2>Explore Rooms</h2>
      <span className="underline"></span>
          <p>Lorem Ipsum is simply dummy text the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s,</p>
        </div>
       <div className="room-card">
        <img src="" alt="" />
        <label className="price"></label>
        <label className="star"></label>
        <label className="option"></label>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, officia!</p>
        <a href="#" className="btn">VIEW DETAILS</a>
        <a href="#" className="btn">BOOK NOW</a>

       </div>
       <div className="room-card">
        <img src="" alt="" />
        <label className="price"></label>
        <label className="star"></label>
        <label className="option"></label>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, officia!</p>
        <a href="#" className="btn">VIEW DETAILS</a>
        <a href="#" className="btn">BOOK NOW</a>

       </div>
       <div className="room-card">
        <img src="" alt="" />
        <label className="price"></label>
        <label className="star"></label>
        <label className="option"></label>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, officia!</p>
        <a href="#" className="btn">VIEW DETAILS</a>
        <a href="#" className="btn">BOOK NOW</a>

       </div>
        </div>
      </div>
      <div className="tellus">
            <div className="tellus-content">
                <h3>SUMMER SPECIAL</h3>
                <div className="tellusbox">
                    <h2><span>25%</span>off</h2></div>
            </div>
                <h2>3SPEND THE BEST VACTION WITH US The Nights Of Thailand</h2>
                <button className="btn form-btn">SEARCH MORE OPTIONS</button>
                <video src=""></video>
        </div>
      <div className="services">
        <span className="services-image">
            <img src="" alt="" />
            <img src="" alt="" />
        </span>
        <p>Amazing Places To Enjoy Your Travel</p>
        <h2>We Provide Best Services</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita facilis nesciunt autem.</p>
         <a href="#" className="btn-deal">READ MORE</a>
      </div>
      <div className="travel-agents">
          <div className="travel-info">
            <h2>Travel Agents</h2>
            <span className="underline"></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur amet cupiditate incidunt esse nulla, 
              dolores vitae perferendis officia temporibus sunt.</p>
          </div>
            <TravelCard /></div>
            <div className="recom-hotel">
        <div className="recom-inf">
          <h2>Perfect Holiday recom-hotel</h2>
      <span className="underline"></span>
          <p>Lorem Ipsum is simply dummy text the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s,</p>
        </div>
        <div className="recom-hotel">
          <img src="" alt="" />
        </div>
        <div className="recom-hotel">
          <div className="recom-hotel-content">
            <p className="recom-hotel-country">United Kingdom</p>
            <h4>Stonehenge,Windsor Castle, And Bath From London</h4>
            <label className="stars"><img src="" alt="" />38 Rewiews</label>
            <p className="recom-hotel-time" >3 days & 2 night</p> 
          </div>
        </div>
        <div className="recom-hotel">
        <div className="recom-hotel-content">
            <p className="recom-hotel-country">United Kingdom</p>
            <h4>Stonehenge,Windsor Castle, And Bath From London</h4>
            <label className="stars"><img src="" alt="" />38 Rewiews</label>
            <p className="recom-hotel-time" >3 days & 2 night</p> 
          </div>
        </div>
        <div className="recom-hotel">
        <div className="recom-hotel-content">
            <p className="recom-hotel-country">United Kingdom</p>
            <h4>Stonehenge,Windsor Castle, And Bath From London</h4>
            <label className="stars"><img src="" alt="" />38 Rewiews</label>
            <p className="recom-hotel-time" >3 days & 2 night</p> 
          </div>
        </div>
        <div className="recom-hotel">
        <div className="recom-hotel-content">
            <p className="recom-hotel-country">United Kingdom</p>
            <h4>Stonehenge,Windsor Castle, And Bath From London</h4>
            <label className="stars"><img src="" alt="" />38 Rewiews</label>
            <p className="recom-hotel-time" >3 days & 2 night</p> 
          </div>
        </div>
        <div className="recom-hotel">
        <div className="recom-hotel-content">
            <p className="recom-hotel-country">United Kingdom</p>
            <h4>Stonehenge,Windsor Castle, And Bath From London</h4>
            <label className="stars"><img src="" alt="" />38 Rewiews</label>
            <p className="recom-hotel-time" >3 days & 2 night</p> 
          </div>
        </div>
      </div>
      <div className="recent">
        <div className="recentact-inf">
          <h2>Perfect Holiday recentact</h2>
      <span className="underline"></span>
          <p>Lorem Ipsum is simply dummy text the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s,</p>
        </div>
        <div className="recentact">
          <img src="" alt="" />
        </div>
        <div className="recentact">
          <div className="recentact-content">
            <p className="recentact-country">United Kingdom</p>
            <h4>Stonehenge,Windsor Castle, And Bath From London</h4>
            <label className="stars"><img src="" alt="" />38 Rewiews</label>
            <p className="recentact-time" >3 days & 2 night</p> 
          </div>
        </div>
        <div className="recentact">
        <div className="recentact-content">
            <p className="recentact-country">United Kingdom</p>
            <h4>Stonehenge,Windsor Castle, And Bath From London</h4>
            <label className="stars"><img src="" alt="" />38 Rewiews</label>
            <p className="recentact-time" >3 days & 2 night</p> 
          </div>
        </div>
        <div className="recentact">
        <div className="recentact-content">
            <p className="recentact-country">United Kingdom</p>
            <h4>Stonehenge,Windsor Castle, And Bath From London</h4>
            <label className="stars"><img src="" alt="" />38 Rewiews</label>
            <p className="recentact-time" >3 days & 2 night</p> 
          </div>
        </div>
        <div className="recentact">
        <div className="recentact-content">
            <p className="recentact-country">United Kingdom</p>
            <h4>Stonehenge,Windsor Castle, And Bath From London</h4>
            <label className="stars"><img src="" alt="" />38 Rewiews</label>
            <p className="recentact-time" >3 days & 2 night</p> 
          </div>
        </div>
        <div className="recentact">
        <div className="recentact-content">
            <p className="recentact-country">United Kingdom</p>
            <h4>Stonehenge,Windsor Castle, And Bath From London</h4>
            <label className="stars"><img src="" alt="" />38 Rewiews</label>
            <p className="recentact-time" >3 days & 2 night</p> 
          </div>
        </div>
      </div>
     <div className="hotel-slider">
       
     </div>
    
    </>
  )
}