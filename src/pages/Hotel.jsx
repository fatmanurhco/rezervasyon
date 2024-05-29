import "../App.css"
import { useState ,useEffect} from "react";
import DataCity  from "../compoments/DataCity"
import { Calendar } from 'primereact/calendar';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay } from 'swiper/modules';
import { hotelimages} from '../compoments/SliderImg';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { supabase } from "../compoments/SupaBase";
import { useNavigate } from 'react-router-dom';

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
const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <div className="hotel-image">
        <img src={hotel.image} alt={hotel.name} />
      </div>
      <div className="hotel-info">
        <h2>{hotel.name}</h2>
        <p>Tipi: {hotel.type}</p>
        <p>Fiyatı: {hotel.price} TL</p>
        <p>Yatak Sayısı: {hotel.bedCount}</p>
        <p>{hotel.description}</p>
        <div className="hotel-buttons">
          <Link to={`/hotel/${hotel.id}`} className="btn">
            Detay
          </Link>
          <Link to={`/hotel/${hotel.id}`} className="btn black">
            Satın Al
          </Link>
        </div>
      </div>
    </div>
  );
};
export default function Hotel()
{
 const[date, setDate]=useState()
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

      <div className="bookform">
            <form className="multi" onSubmit={handleSubmit}>
              <span>
            <label>Nereye</label>
              <select name="il" className="secim" >
                {DataCity.dataCity.map((city) => (
                <option key={city.plaka} value={city.plaka}>{city.il}</option>))}</select>
            </span>
            <span>
            <label>Gidiş Tarihi</label>
              <Calendar className="calendar"  value={date} onChange={(e) => setDate(e.value)} placeholder="dd-mm-yy" />
              </span>
              <span>
            <label>Çıkış Tarihi</label>
              <Calendar className="calendar"  value={date} onChange={(e) => setDate(e.value)} placeholder="dd-mm-yy" />
              </span>
              <span>
            <label>Kişi Sayısı</label>
              <select name="adult" className="secim">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              </span>
              <span>
              <label>Otel Tipi</label>
              <select name="hotel-types" className="secim">
                <option value="1">High Class</option>
                <option value="2">Middle Class</option>
                <option value="3">Low Class</option>
              </select>
              </span>
            <button className="btn form-btn btn-multi">Hemen Bul</button>
          </form>

        </div>
      </div>
      <div className="section-chooseus">
        
        <div className="innfoboxes">
          <div className="box">
            <img src="/icons/price-tag.png" alt="pricing" />
            <h3>Lüks Konfor</h3>
            <p>Otelimizde, rahatınız ve konforunuz için her detay düşünülmüştür.</p>
          </div>
          <div className="box">
          <img src="/icons/award.png" alt="service" />
            <h3>Mükemmel Hizmet</h3>
            <p>Misafir memnuniyeti bizim için her şeyden önemlidir.</p>
          </div>
          <div className="box">
          <img src="/icons/earth-globe.png" alt="coverage" />
            <h3>Eğlence ve Aktiviteler:</h3>
            <p>Misafirlerimizin ihtiyaçlarına duyarlı bir hizmet anlayışıyla çalışıyoruz. </p>
          </div>
          <div className="box">
          <img src="/icons/earth-globe.png" alt="coverage" />
            <h3>Şehrin Merkezinde Konum</h3>
            <p>Otelimiz, şehrin en hareketli noktalarına yakın konumda bulunmaktadır.</p>
          </div>
        </div>
      </div>
     
      <div className="flight-dest">
          
            <h2>En Çok Tercih Edilen İller</h2>
         
          <div className="fdest">
          <div className="destination-flights">
      <img src={'/destinations/ankara.jpg'} alt={'ankara'} />
      <span className="dest-section">
      <div className="star-rating">
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
    </div>
        <h3>Ankara</h3>
      </span>
      
    </div>
    <div className="destination-flights">
      <img src={'/destinations/kaş.jpg'} alt={'kaş'} />
      <span className="dest-section">
      <div className="star-rating">
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
    </div>
        <h3>Kaş</h3>
      </span>
      
    </div>
    <div className="destination-flights">
      <img src={'/destinations/trabzon.jpg'} alt={'trabzon'} />
      <span className="dest-section">
      <div className="star-rating">
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
    </div>
        <h3>Trabzon</h3>
      </span>
      
    </div>
    <div className="destination-flights">
      <img src={'/destinations/mardin.jpg'} alt={'mardin'} />
      <span className="dest-section">
      <div className="star-rating">
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
    </div>
        <h3>Mardin</h3>
      </span>
      
    </div>
    <div className="destination-flights">
      <img src={'/destinations/istanbul.jpg'} alt={'istanbul'} />
      <span className="dest-section">
      <div className="star-rating">
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
    </div>
        <h3>İstanbul</h3>
      </span>
      
    </div>
    <div className="destination-flights">
      <img src={'/destinations/izmir.jpg'} alt={'izmir'} />
      <span className="dest-section">
      <div className="star-rating">
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
    </div>
        <h3>İzmir</h3>
      </span>
      
    </div>
      
        </div>
        </div>
     
      <div className="explore-rooms">
        <div className="room-inf">
          <h2>Odalara Göz Atın</h2>
          <p>Huzur dolu anlar ve unutulmaz deneyimler için sizleri otelimizde ağırlamaktan mutluluk duyarız. </p>
        </div>
        <div className="hotel-cards">
        <HotelCard
        
  hotel={{
    id:1,
    name: 'Hotel Ozkaymak Falez',
    type: 'Lüks',
    price: 9600,
    bedCount: 2,
    description: 'Harika bir tatil için ideal bir mekan.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }}
/>
<HotelCard
  hotel={{
    id:2,
    name: 'Hera Montagna Hotel',
    type: 'Orta',
    price: 4200,
    bedCount: 2,
    description: 'Harika bir tatil için ideal bir mekan.',
    image: 'https://plus.unsplash.com/premium_photo-1676321688630-9558e7d2be10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }}
/>
<HotelCard
  hotel={{
    id:3,
    name: 'Gönç Palas Oteli',
    type: 'Düşük',
    price: 3036,
    bedCount: 2,
    description: 'Harika bir tatil için ideal bir mekan.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }}
/>
</div>
        </div>
      <div className="banner">
        <span>
        <h1>YAZA ÖZEL %25 İNDİRİM</h1>
        <h3>BU YAZ TATİLİNİZİ BİZİMLE PLANLAYIN</h3>
        <a href="#" className="btn btn-banner">DETAYLARI GÖR</a>
        </span>
        <img src="/destinations/kaş.jpg" alt="kaş" />
      </div>
      
      <div className="services">
        <span className="services-image">
            <img src="/destinations/ankara.jpg" alt="" />
            <img src="/destinations/istanbul.jpg" alt="" />
        </span>
        <span className="services-span">
        <p>Seyahatiniz İçin Muhteşem Yerler</p>
        <h2>En İyi Hizmeti Bİz Veriyoruz</h2>
        <p>Siz değerli misafirlerimize unutulmaz bir deneyim sunmak için buradayız. 
          Otelimizde sunduğumuz en iyi hizmetlerle, konforlu ve keyifli bir konaklama geçirmenizi sağlamak için çaba gösteriyoruz. 
          Misafirlerimizin memnuniyeti bizim önceliğimizdir. Sizleri aramızda görmek için sabırsızlanıyoruz!</p>
         <a href="#" className="btn btn-deal">DAHA FAZLA</a>
         </span>
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