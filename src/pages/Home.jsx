
import { useEffect, useRef, useState } from "react";
import DataCity  from "../compoments/DataCity"
import { useNavigate } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema CSS dosyası
import 'primereact/resources/primereact.min.css';          // PrimeReact CSS dosyası
import { Calendar } from 'primereact/calendar';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay } from 'swiper/modules';
import { images , deals} from '../compoments/SliderImg';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { supabase } from "../compoments/SupaBase";
import Slider from 'react-slick';
import '../ReviewSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../App.css"

const ReviewsSlider = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('content, register, title, photo');

      if (error) {
        throw error;
      }

      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error.message);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="reviewer-info">
              <img
                src={review.photo}
                alt={review.register}
                className="reviewer-photo"
              />
              <div className="reviewer-details">
                <h3 className="reviewer-name">{review.register}</h3>
                <p className="reviewer-title">{review.title}</p>
              </div>
            </div>
            <p className="review-text">{review.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const PlansList = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const { data, error } = await supabase
        .from('plans')
        .select('ülke, açıklama, fiyat, gün, img');

      if (error) {
        throw error;
      }

      setPlans(data);
    } catch (error) {
      console.error('Error fetching plans:', error.message);
    }
  };

  return (
    <div>
      <div className="home-plan">
        {plans.map((plan, index) => (
          <div className="plan-card plan-home" key={index}>
            <img src={plan.img} alt={plan.açıklama} />
            <h2> {plan.ülke}</h2>
            <p>Açıklama: {plan.açıklama}</p>
            <p>Fiyat: {plan.fiyat} TL</p>
            <p>Gün Sayısı: {plan.gün} gün</p>
          </div>
        ))}
      </div>
    </div>
  );
};


const RecentActivities = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data: blog, error } = await supabase
        .from('blog')
        .select('id, title, created_at, first_sentence');

      if (error) {
        throw error;
      }

      setBlog(blog);
    } catch (error) {
      console.error('Error fetching blogs:', error.message);
    }
  };

  return (
    <div className="act-box">
      {blog.map(b => (
        <div className="recent-act" key={b.id}> 
          <p>{b.created_at}</p>
          <h2>{b.title}</h2>
          <p>{b.first_sentence}</p>
          <Link className="btn act" to={`/blog/${b.id}`}>
           OKU
          </Link>
        </div>
        
      ))}
    </div>
  );
};


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
            <h4>{deal.title}</h4>
            <p className="price">1000 TL ' den başlayan fiyatlarla</p>
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
              <span className="slider-btn">
                {image.buttons.map(button => (
                <Link className="btn" key={button.id} to={button.link} >{button.label}</Link>
              ))}
              </span>
              
            </div>
          </div>
          <div className="slide-image" style={{ backgroundImage: `url(${image.url})` }}></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}




export default function Home()
{
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/hotel-list`);
  
  };

   
      
  return(
    <>
   <div className="slider">
        <MainSwiper />
      </div>
    <div className="home">
      
      <div className="booking">
        <span className="book-info">
          <h3>About NepaYatri</h3>
          <h2> Biz, seyahat tutkunlarından oluşan bir ekibiz ve unutulmaz deneyimler yaşatmaya kararlıyız.</h2>
          <p>Dünyanın her yerinden gizli kalmış hazineleri keşfetmeyi ve seyahat edenlere ilham vermeyi seviyoruz. İster macera dolu bir tatil ister sakin bir kaçamak arıyor olun, 
            size mükemmel seyahat planını oluşturmanıza yardımcı olabiliriz.</p>
        </span>
      <div className="bookform">
          <h3>Bir Yer Ara</h3>
            <form onSubmit={handleSubmit}> 
              <span>
                <label>Nereye Gitmek istiyorsunuz?</label>
              <select name="il" className="secim book-dest" value={destination}
          onChange={(e) => setDestination(e.target.value)} >
                {DataCity.dataCity.map((city) => (
                <option key={city.plaka} value={city.plaka}>{city.il}</option>))}</select>
              </span>
              <span className="bookform-span">
              <span>
        <label>Gidiş Tarihi</label>
        <Calendar
          className="calendar"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.value)}
          placeholder="dd-mm-yy"
        />
      </span>
      <span>
        <label>Dönüş Tarihi</label>
        <Calendar
          className="calendar"
          value={returnDate}
          onChange={(e) => setReturnDate(e.value)}
          placeholder="dd-mm-yy"
        />
      </span>
            <span><label>Yetişkin Sayısı</label>
              <select name="adult" className="secim" value={adults}
          onChange={(e) => setAdults(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              </span>
              <span>
            <label>Çocuk Sayısı</label>
              <select name="children" className="secim"  value={children}
          onChange={(e) => setChildren(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

            </span> 
            </span> 
            <button className="btn form-btn">Hemen Bul</button>
          </form>

        </div>
      </div>
      <div className="section-chooseus">
        <span>

        <h2>Neden Biz</h2>
        
        </span>
        <p>Seyahat planlamak, heyecan verici olduğu kadar stresli de olabilir. Doğru destinasyonu seçmek, konaklama ayarlamak, ulaşım ve aktiviteleri organize etmek kafa karıştırıcı olabilir. 
          İşte tam da bu noktada size yardımcı olmak için devreye giriyoruz!</p>
        <div className="innfoboxes">
          <div className="box">
            <img src="/icons/price-tag.png" alt="pricing" />
            <h3>En iyi fiyat garantisi</h3>
            <p>Size her zaman en iyi fiyatları sunmak için çalışıyoruz.</p>
          </div>
          <div className="box">
          <img src="/icons/award.png" alt="service" />
            <h3>Kişiye özel hizmet</h3>
            <p>Her seyahat planını müşterinin özel ihtiyaçlarına göre uyarlıyoruz.</p>
          </div>
          <div className="box">
          <img src="/icons/earth-globe.png" alt="coverage" />
            <h3>Geniş deneyim yelpazesi</h3>
            <p>Farklı bütçelere ve ilgi alanlarına uygun seyahatler planlıyoruz</p>
          </div>
        </div>
      </div>
      </div>
      <div className="top-dest">
        
        <div className="destinations">
        <div className="dest-inf red">
          <span className="dest">
            <h2>En Çok Tercih Edilen Destinasyonlar</h2>
            <p>Dünyayı keşfetmeye hazır olun! Muhteşem manzaralardan büyüleyici kültürlere kadar,
               en iyi destinasyonlar sizi bekliyor.</p>
          </span>
        </div>
      {DataCity.destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination}  
        />
        
      ))}
      
      

    </div>

      </div>
      <div className="home">
      <div className="holiday-plan">
        <div className="plan-inf">
          <h2>Mükemmel Tatil Planı</h2>
      
          <p>Hayal Ettiğinizden Fazlası için Hazırlandı! Uzman Ekibimizle, Rüya Tatiliniz İçin Her Detayı Düşündük. Sadece Keyfinize Bakın, Gerisini Bize Bırakın!</p>
        </div>
        
         <PlansList />
        
      </div>
    
      <div className="topdeals">
          <div className="deal-info">
            <h2>Bugünün Favorileri</h2>
            
            <p>Keşfetmeniz Gereken En İyi Seçenekler</p>
          </div>
            <DealCard /></div>
      <div className="banner">
        <span>
        <h1>YAZA ÖZEL %25 İNDİRİM</h1>
        <h3>BU YAZ TATİLİNİZİ BİZİMLE PLANLAYIN</h3>
        <a href="#" className="btn btn-banner">DETAYLARI GÖR</a>
        </span>
        <img src="/destinations/kaş.jpg" alt="kaş" />
      </div>
      </div>
      <div className="calltobook">
      <span className="ctb">
        <h2>Rezervasyon İçin Bizi Arayın</h2>
      </span>
        <div className="call-boxes">
          <div className="call-box">
          <img src="/icons/hiking.png" alt="hiking" className="call-img" />
          <h3>320</h3>
          <p>Pro Tour Guides</p>
           </div>
        <div className="call-box">
        <img src="/icons/pin.png" alt="pin" className="call-img" />
          <h3>150</h3>
          <p>Tours are Completed</p>
        </div>
        <div className="call-box">
        <img src="/icons/walk.png" alt="walk" className="call-img" />
          <h3>152</h3>
          <p>Travelling Experience</p>
        </div>
        <div className="call-box">
        <img src="/icons/people.png" alt="people" className="call-img" />
          <h3>523</h3>
          <p>Happy Customers</p>
        </div>
        </div>
        
      </div>
      <div className="home">
      <div className="top-rewiew">
        <h2>En İyi Tur İncelemeleri</h2>
      
        <p>Keşfedin ve Seyahatlerinizi En İyi Şekilde Planlayın.</p>
       <ReviewsSlider />
           
      </div>
      <div className="recent-activities">
        <span className="act-info">
          <h2>Son Aktiviteler</h2>
          <p>Yolculuklarınızı Renklendirecek En Güncel ve Etkileyici Deneyimler</p>
        </span>
        
     
       <RecentActivities />
     

      </div>
      
    </div>
    
    </>
  )
}