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
import { supabase } from "../compoments/SupaBase";

const PlansList = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const { data, error } = await supabase
        .from('plans')
        .select('ülke, açıklama, fiyat, gün');

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
      <div>
        {plans.map((plan, index) => (
          <div key={index} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
            <h2>Ülke: {plan.ülke}</h2>
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
        .select('id, title, created_at, content');

      if (error) {
        throw error;
      }

      setBlog(blog);
    } catch (error) {
      console.error('Error fetching blogs:', error.message);
    }
  };

  return (
    <div>
      {blog.map(b => (
        <div key={b.id}>
          <h2>{b.title}</h2>
          <p>{b.created_at}</p>
          <p>{b.content}</p>
          <Link to={`/blog/${b.id}`}>
            <button>Oku</button>
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
            <h6>{deal.country}</h6>
            <h4>{deal.title}</h4>
            <p>%30 indirimle hemen rezervasyon yap!</p>
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
          <h2> Biz, seyahat tutkunlarından oluşan bir ekibiz ve unutulmaz deneyimler yaşatmaya kararlıyız.</h2>
          <p>Dünyanın her yerinden gizli kalmış hazineleri keşfetmeyi ve seyahat edenlere ilham vermeyi seviyoruz. İster macera dolu bir tatil ister sakin bir kaçamak arıyor olun, 
            size mükemmel seyahat planını oluşturmanıza yardımcı olabiliriz.</p>
        </span>
      <div className="bookform">
          <h3>Bir Yer Ara</h3>
            <form>
              <span>
                <label>Nereye Gitmek istiyorsunuz?</label>
              <select name="il" className="secim book-dest" >
                {DataCity.dataCity.map((city) => (
                <option key={city.plaka} value={city.plaka}>{city.il}</option>))}</select>
              </span>
              <span className="bookform-span">
              <span  >
                 <label>Gidiş Tarihi</label>
              <Calendar className="calendar"  value={date} onChange={(e) => setDate(e.value)} placeholder="dd-mm-yy" />
              </span>
            <span>
              <label>Dönüş Tarihi</label>
              <Calendar className="calendar"  value={date} onChange={(e) => setDate(e.value)} placeholder="dd-mm-yy" />
            </span>
            <span><label>Yetişkin Sayısı</label>
              <select name="adult" className="secim">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              </span>
              <span>
            <label>Çocuk Sayısı</label>
              <select name="children" className="secim">
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
        <div className="plan-section">
         <PlansList />
        </div>
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
           
      </div>
      <div className="recent-activities">
        <span className="act-info">
          <h2>Son Aktiviteler</h2>
          <p>Yolculuklarınızı Renklendirecek En Güncel ve Etkileyici Deneyimler</p>
        </span>
        
        <div className="act-box">
       <RecentActivities />
        </div>

      </div>
      
    </div>
    
    </>
  )
}