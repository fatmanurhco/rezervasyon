import "../App.css"
import { useEffect, useRef, useState } from "react";
import DataCity  from "../compoments/DataCity"
import { Calendar } from 'primereact/calendar';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay } from 'swiper/modules';
import { images , deals} from '../compoments/SliderImg';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

function SssItem({ question, answer, isOpen, onClick }) {
  return (
    <div className={`sss-item ${isOpen ? 'open' : 'closed'}`} onClick={onClick}>
      <h3>{question}</h3>
      {isOpen && <p>{answer}</p>}
    </div>
  );
}

function Sss() {
  const [questions, setQuestions] = useState([
    { question: 'Soru 1', answer: 'Cevap 1', isOpen: true },
    { question: 'Soru 2', answer: 'Cevap 2', isOpen: false },
    { question: 'Soru 3', answer: 'Cevap 3', isOpen: false },
  ]);

  const toggleQuestion = (index) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question, i) =>
        i === index ? { ...question, isOpen: !question.isOpen } : question
      )
    );
  };

  return (
    <div className="sss">
      {questions.map((question, index) => (
        <SssItem
          key={index}
          question={question.question}
          answer={question.answer}
          isOpen={question.isOpen}
          onClick={() => toggleQuestion(index)}
        />
      ))}
    </div>
  );
}


const locations = {
  abroad: "Miami, FL",
  to: ["Key West, FL", "Cozumel, Mexico"]
};

const TrendItem = ({ src, alt, title, price, from, locations, rating, speed, length, capacity, beds }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mar-bottom-30">
      <div className="trend-item">
        <div className="trend-image">
          <img src={src} alt={alt} />
          <div className="trend-tags">
            <a href="#">
              <i className="flaticon-like"></i>
            </a>
          </div>
          <div className="trend-price">
            <p>Attraction Tickets</p>
            <p className="price">
              From <span>${price}.00</span>
            </p>
          </div>
        </div>
        <div className="trend-content">
          <h6>From: {from}</h6>
          <h3>
            <a href="cruise-detail.html">{title}</a>
          </h3>
          <p>Abroad: {locations.abroad}</p>
          <p>Sails to: {locations.to.join(', ')}</p>
          <div className="rating mar-bottom-15">
            {[...Array(Math.floor(rating))].map((_, i) => (
              <span key={i} className="fa fa-star checked"></span>
            ))}
            {[...Array(5 - Math.floor(rating))].map((_, i) => (
              <span key={i} className="fa fa-star-half checked"></span>
            ))}
          </div>
          <div className="para-content">
            <span className="mar-right-20">
              <a href="#" className="tag">
                <i className="fa fa-tachometer-alt mar-right-5"></i> {speed} MPH
              </a>
            </span>
            <span className="mar-right-20">
              <a href="#" className="tag">
                <i className="fa fa-ruler mar-right-5"></i> {length} M
              </a>
            </span>
            <span className="mar-right-20">
              <a href="#" className="tag">
                <i className="fa fa-user mar-right-5"></i> {capacity}
              </a>
            </span>
            <span>
              <a href="#">
                <i className="fa fa-bed mar-right-5"></i> {beds}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// How to use the TrendItem component with locations prop:



const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img src={destination.img} alt={destination.content} />
      <span className="dest-section">
      <div className="star-rating">
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
    </div>
        <h3>{destination.content}</h3>
      </span>
      <Link to="/booking" className="btn-dest"></Link>
      
    </div>
  );
};

export function DealCard()
{
  return(
  <Swiper
  className="swiper swiperdeal"
    modules={[Navigation, Autoplay]}
    centeredSlides={true}
    autoplay={{
      delay: 60000,
      disableOnInteraction: false,
    }}
    navigation
    speed={5000}
  >
     
     {deals.map(deal => (
        <SwiperSlide 
          className="swiper-slide slide-deal"
          key={deal.id}>
          <img src={deal.img} alt={deal.country} />
          <div className="deal-content">
            <h6>{deal.country}</h6>
            <h4>{deal.title}</h4>
            <p>With upto 30% Off, experience Europe your way!</p>
            <p className="price">From $250.00</p>
          </div>

        </SwiperSlide>
      ))}
  </Swiper>
  );
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
       {images.map(image => (
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




export default function Cruise()
{
  const[date, setDate]=useState()
   return(
    <>
   <div className="slider">
        <MainSwiper />
      </div>
    <div className="home">
      
      <div className="booking">
        <span className="book-info">
          <h3>About NepaYatri</h3>
          <h2>We're truely dedicated to make your travel experience as much as simple and fun as possible</h2>
          <p>Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies
          condimentum. In ac ultrices lectus.<br/>Nullam ex elit, vestibulum ut urna non, tincidunt condimentum sem. Sed enim tortor, accumsan at consequat et, tempus sit ame</p>
        </span>
      <div className="bookform">
          <h3>Find A Place</h3>
            <form>
            <label>Your Destination</label>
              <select name="il" className="secim" >
                {DataCity.dataCity.map((city) => (
                <option key={city.plaka} value={city.plaka}>{city.il}</option>))}</select>
            
            <label>Gidiş Tarihi</label>
              <Calendar className="calendar"  value={date} onChange={(e) => setDate(e.value)} placeholder="dd-mm-yy" />
            
            <label>Dönüş Tarihi</label>
              <Calendar className="calendar"  value={date} onChange={(e) => setDate(e.value)} placeholder="dd-mm-yy" />
            
            <label>Yetişkin Sayısı</label>
              <select name="adult" className="secim">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            <label>Çocuk Sayısı</label>
              <select name="children" className="secim">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            <button className="btn form-btn">Hemen Bul</button>
          </form>

        </div>
      </div>
      <div className="trend">
        <TrendItem />
      </div>
      <div className="section-chooseus">
        <h2>Why Choose Us</h2>
        <span className="underline"></span>
        <p>Seyahat planlamak, heyecan verici olduğu kadar stresli de olabilir. Doğru destinasyonu seçmek, konaklama ayarlamak, ulaşım ve aktiviteleri organize etmek kafa karıştırıcı olabilir. 
          İşte tam da bu noktada size yardımcı olmak için devreye giriyoruz!</p>
        <div className="innfoboxes">
          <div className="box">
            <img src="/icons/price-tag.png" alt="pricing" />
            <h3>Competetive Pricing</h3>
            <p>With 500+ suppliers and the purchasing power of 300 milion members</p>
          </div>
          <div className="box">
          <img src="/icons/award.png" alt="service" />
            <h3>Award Winning Service</h3>
            <p>Fabulous Travel worry free knowing that we're here if you need us,24 hours a day</p>
          </div>
          <div className="box">
          <img src="/icons/earth-globe.png" alt="coverage" />
            <h3>Worldwide Coverage</h3>
            <p>1,200,000 hotels in more than 200 countries and regions flights to over 5,000 cities</p>
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
      {DataCity.destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination}  
        />
        
      ))}
      
      

    </div>

      </div>
      <div className="home">
      <div className="holiday-plan">
        <div className="plan-inf">
          <h2>Perfect Holiday Plan</h2>
      <span className="underline"></span>
          <p>Lorem Ipsum is simply dummy text the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s,</p>
        </div>
         <div className="plan">
        <img src="/plan/trending6.jpg" alt="trending6" />
        <div className="plan-content">
            <p className="plan-country">Turkey</p>
            <h4>NYC One World Observatory Skip-The-Line Ticket</h4>
            <label className="stars">
            <div className="star-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
              18 Rewiews</label>
            <p className="plan-time" >3 days & 2 night</p> 
          </div>
        </div>
        <div className="plan">
        <img src="/plan/trending6.jpg" alt="trending6" />
        <div className="plan-content">
            <p className="plan-country">Turkey</p>
            <h4>NYC One World Observatory Skip-The-Line Ticket</h4>
            <label className="stars">
            <div className="star-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
              18 Rewiews</label>
            <p className="plan-time" >3 days & 2 night</p> 
          </div>
        </div>
        <div className="plan">
        <img src="/plan/trending6.jpg" alt="trending6" />
        <div className="plan-content">
            <p className="plan-country">Turkey</p>
            <h4>NYC One World Observatory Skip-The-Line Ticket</h4>
            <label className="stars">
            <div className="star-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
              18 Rewiews</label>
            <p className="plan-time" >3 days & 2 night</p> 
          </div>
        </div>
        <div className="plan">
        <img src="/plan/trending6.jpg" alt="trending6" />
        <div className="plan-content">
            <p className="plan-country">Turkey</p>
            <h4>NYC One World Observatory Skip-The-Line Ticket</h4>
            <label className="stars">
            <div className="star-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
              18 Rewiews</label>
            <p className="plan-time" >3 days & 2 night</p> 
          </div>
        </div>
        <div className="plan">
        <img src="/plan/trending6.jpg" alt="trending6" />
        <div className="plan-content">
            <p className="plan-country">Turkey</p>
            <h4>NYC One World Observatory Skip-The-Line Ticket</h4>
            <label className="stars">
            <div className="star-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
              18 Rewiews</label>
            <p className="plan-time" >3 days & 2 night</p> 
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="workwith">
          <a href="#" className="btn explore-btn">JOIN OUR TEAM</a>
        </div>
      </div>
      <div className="topdeals">
          <div className="deal-info">
            <h2>Today's Top Deals</h2>
            <span className="underline"></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur amet cupiditate incidunt esse nulla, 
              dolores vitae perferendis officia temporibus sunt.</p>
          </div>
            <DealCard /></div>
      <div className="banner">
        <h1>SUMMER SPECIAL UPTO 25% OFF</h1>
        <h3>SPEND THE BEST VACTION WITH <br />US <br /> The Bights Of Thailand </h3>
        <a href="#" className="btn btn-banner">VIEW DETAILS</a>
      </div>
      <div className="calltobook">
        <h2>Call Our Agents To Book</h2>
        <span className="underline"></span>
        <p>Travel award winning and top rated tour operator</p>
        <div className="call-box">
          <img src="" alt="" className="call-img" />
          <h3>320</h3>
          <p>Pro Tour Guides</p>
           </div>
        <div className="call-box">
        <img src="" alt="" className="call-img" />
          <h3>150</h3>
          <p>Tours are Completed</p>
        </div>
        <div className="call-box">
        <img src="" alt="" className="call-img" />
          <h3>152</h3>
          <p>Travelling Experience</p>
        </div>
        <div className="call-box">
        <img src="" alt="" className="call-img" />
          <h3>523</h3>
          <p>Happy Customers</p>
        </div>
      </div>
      <div className="faq">
        <div className="faq-info">
          <h3>Before Your Enter Cruise</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Sss />
      </div>
      <div className="top-rewiew">
        <h2>Top Tour Reviews</h2>
      <span className="underline"></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Ad harum qui nisi quod quo sit.</p>
           <div className="comments">
                  <div className="comment"></div>
                  <img src="" alt="" className="user-photo" />
                  <p className="user-title"></p>
                  <label className="stars"></label>

           </div>
      </div>
      <div className="recent-activities">
        <span className="act-info">
          <h2>Recent Activities</h2>
      <span className="underline"></span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Laboriosam rem nulla illum.</p>
        </span>
        <div className="act-box act-text"></div>
        <div className="act-box"></div>
        <div className="act-box"></div>
        <div className="act-box act-text"></div>
        <div className="act-box act-text"></div>
        <div className="act-box"></div>
      </div>
      <div className="partners">
        <h2>Our Awesome Parnters</h2>
      <span className="underline"></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Est architecto deserunt, quos voluptate 
          quidem voluptatem labore esse neque commodi earum.</p>
            <div className="partners-slider">
              
            </div>
      </div>
    </div>
    </>
  )
}