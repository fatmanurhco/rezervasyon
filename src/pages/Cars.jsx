import "../App.css"
import { useState ,useEffect} from "react";
import DataCity  from "../compoments/DataCity"
import { Calendar } from 'primereact/calendar';
import { Slider } from 'primereact/slider';
import { InputText } from 'primereact/inputtext';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay } from 'swiper/modules';
import { carsimages } from '../compoments/SliderImg';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { supabase } from "../compoments/SupaBase";
import '../ReviewSlider.css';

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

  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="review-card">
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
            <p className="review-text">{review.content.split('.')[0]}.</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
const CarSlider = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const { data, error } = await supabase
        .from('cars')
        .select('id,price, model, available,photo');

      if (error) {
        console.error('Error fetching cars:', error);
      } else {
        setCars(data);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="car-slider">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id} className="car-card">
            <img src={car.photo} />
            <h3>{car.model}</h3>
            <p>Fiyat: {car.price} TL</p>
            <p>Stok: {car.available} adet</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
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

export default function Araba()
{
  const [date, setDate] = useState(null);
  const [value, setValue] = useState(50);  // Başlangıç değeri verildi
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
 
    navigate(`/car-list`);
  
  }
      
  return(
    <>
   <div className="slider">
        <MainSwiper />
      </div>
    <div className="home">
      
      <div className="booking">
      <div className="bookform">
            <form className="multi car-form" onSubmit={handleSubmit}>
              <span>
            <label>Araç Markası</label>
              <select name="araba" className="secim" >
                {DataCity.dataAraba.map((car) => (
                <option key={car.plaka} value={car.plaka}>{car.il}</option>))}</select>
            </span>
            <span>
            <label>Alış Tarihi</label>
              <Calendar className="calendar"  value={date} onChange={(e) => setDate(e.value)} placeholder="dd-mm-yy" />
            </span>
            <span>
            <label>Bırakış Tarihi</label>
              <Calendar className="calendar"  value={date} onChange={(e) => setDate(e.value)} placeholder="dd-mm-yy" />
              </span>
              <span>
              <label>Fiyat Aralığı</label>
              <Slider value={value} onChange={(e) => setValue(e.value)} />
              </span>
            <button className="btn form-btn btn-multi">Hemen Bul</button>
          </form>

        </div>
      </div>
      <div className="section-chooseus section-howitworks">
        <h2>Nasıl Kiralanır?</h2>
        <p className="wcu-p">Seyahat planlamak, heyecan verici olduğu kadar stresli de olabilir. Doğru destinasyonu seçmek, konaklama ayarlamak, ulaşım ve aktiviteleri organize etmek kafa karıştırıcı olabilir. 
          İşte tam da bu noktada size yardımcı olmak için devreye giriyoruz!</p>
        <div className="innfoboxes">
          <div className="box">
            <img src="/icons/price-tag.png" alt="pricing" />
            <h3>Aracını Seç</h3>
            <p>Aracını Seç, konumunu seç, zamanını ayarla</p>
          </div>
          <div className="box">
          <img src="/icons/award.png" alt="service" />
            <h3>Bilgilerini Doldur</h3>
            <p>Formu doldur ve bir sonraki adıma geç</p>
          </div>
          <div className="box">
          <img src="/icons/earth-globe.png" alt="coverage" />
            <h3>Hemen Öde</h3>
            <p>Ödeme yöntemini seç ve hemen öde</p>
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
     
      <CarSlider />
         </div>

      </div>
      <div className="home">
      <div className="banner ban-car">
        <span>
        <h3>Bize Nereye Gitmek İstediğinizi Söyleyin</h3>
        <h1> %25 İndirim</h1>
        <h1>Birçok Araba Seçeneğiyle</h1>
        <a href="#" className="btn btn-banner">DETAYLARI GÖR</a>
        </span>
       
      </div>
        </div>
       
      <div className="happy-with-us">
        <div className="hwu-inf ">
            <h2>Birçok İnsan Bizimle Mutlu!</h2>
        </div>
        <div className="mention">
                  <ReviewsSlider />
         </div>

    
      <div className="recent-activites">
        <div className="recent-inf">
          <h2>Recent Activities</h2>
          <RecentActivities/>
         
            
        </div>
      </div>
      
      
      </div>
    </div>
    </>
  )
}