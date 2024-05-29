import "../App.css"
import { useEffect, useRef, useState } from "react";
import DataCity  from "../compoments/DataCity"
import { Calendar } from 'primereact/calendar';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay } from 'swiper/modules';
import { flightimages, deals} from '../compoments/SliderImg';
import 'swiper/css';
import { supabase } from '../compoments/SupaBase';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';

export function Multi()

{
    const[date, setDate]=useState()
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
  
      navigate(`/flight-list`);
    
    };
    return(
        <>
         

      <div className="bookform flights ">
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
            <label>Dönüş Tarihi</label>
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
              <label>Çocuk Sayısı</label>
              <select name="adult" className="secim">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              </span>
    
            <button className="btn form-btn btn-multi">Hemen Bul</button>
          </form>

        </div>
    
        
        </>
    )
}

export function Round()
{
    const[date, setDate]=useState()
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
  
      navigate(`/flight-list`);
    
    };
    return(
        <>
         
       <div className="bookform flights ">
             <form className="multi" onSubmit={handleSubmit}>
              <span>
             <label>Nereden</label>
               <select name="il" className="secim" >
                 {DataCity.dataCity.map((city) => (
                 <option key={city.plaka} value={city.plaka}>{city.il}</option>))}</select>
             </span>
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
            <label>Dönüş Tarihi</label>
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
    
            <button className="btn form-btn btn-multi">Hemen Bul</button>
           </form>
 
         </div>
     
         
         </>
        
    )
}
export function One()
{
    const[date, setDate]=useState()
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
  
      navigate(`/flight-list`);
    
    };
    return(
        <>
        
      <div className="bookform flights one">
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
            <label>Dönüş Tarihi</label>
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
              <label>Çocuk Sayısı</label>
              <select name="adult" className="secim">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              </span>
    
            <button className="btn form-btn btn-multi">Hemen Bul</button>
          </form>

        </div>
        
        </>
    )
}

const BookingSection = () => {
    const [activeTab, setActiveTab] = useState('round');
  
    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  
    return (
        <>
      <section className="booking-flight">
              <ul className="flights-sec" >
                    <li className={activeTab === 'round' ? 'active' : ''}>
                      <a data-toggle="round" onClick={() => handleTabChange('round')} href="#info" >
                        <i className="fa fa-check-circle"></i> Round-Trip
                      </a>
                    </li>
                    <li className={activeTab === 'one' ? 'active' : ''}>
                      <a data-toggle="tab" onClick={() => handleTabChange('one')} href="#one" >
                        <i className="fa fa-check-circle"></i> One-Way
                      </a>
                    </li>
                    <li className={activeTab === 'multi' ? 'active' : ''}>
                      <a data-toggle="tab" onClick={() => handleTabChange('multi')} href="#multi" >
                        <i className="fa fa-check-circle"></i> Multi-Trip
                      </a>
                    </li>
               
                    </ul>
  
                <div className="tab-content">
                  <div id="round" className={`tab-pane fade ${activeTab === 'round' ? 'in active' : ''}`}>
                    <Round />
                  </div>
                  <div id="multi" className={`tab-pane fade ${activeTab === 'multi' ? 'in active' : ''}`}>
                   <Multi />
                  </div>
                  <div id="one" className={`tab-pane fade ${activeTab === 'one' ? 'in active' : ''}`}>
                    <One />
                  </div>
                </div>
      
  
           
              
          
      </section>
      </>
    );
  };
 
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
      { 
        question: 'Bilet İptali ve İade Politikası Nedir?', 
        answer: 'Bilet iptali ve iade politikası, havayolu şirketlerinin bilet iptaline ve iade işlemlerine ilişkin belirledikleri kuralları ifade eder. Her havayolu şirketi farklı bir iptal ve iade politikası benimseyebilir. Genellikle, bilet iptali veya değişiklik durumunda uygulanacak ceza veya ücretler ve iade süreçleri hakkında bilgi alabilirsiniz.', 
        isOpen: true 
      },
      { 
        question: 'Bagaj Kuralları Nelerdir?', 
        answer: 'Bagaj kuralları, havayolu şirketlerinin yolcuların uçaklara getirebilecekleri bagajların boyutu, ağırlığı ve taşıma kurallarını belirleyen kuralların tümüdür. Bagaj kuralları, her havayolu şirketi ve hatta her uçuş için farklılık gösterebilir. Bu kurallar, fazladan ücretlendirme, bagaj boyutu sınırlamaları ve taşıma kısıtlamalarını içerebilir.', 
        isOpen: false 
      },
      { 
        question: 'Check-in İşlemleri Nasıl Yapılır?', 
        answer: 'Check-in işlemi, uçuşa kaydolma ve uçuşunuzu onaylama sürecidir. Geleneksel olarak havaalanında yapılabilen check-in işlemi, günümüzde genellikle online olarak da yapılabilmektedir. Online check-in, uçuştan birkaç saat önce veya günler önce, havayolu şirketinin web sitesi veya mobil uygulaması üzerinden yapılabilir.', 
        isOpen: false 
      },
      { 
        question: 'Yolcu Hakları ve Güvenlik Önlemleri Nelerdir?', 
        answer: 'Yolcu hakları ve güvenlik önlemleri, havayolu seyahati sırasında yolcuların haklarını ve güvenliklerini korumayı amaçlayan kurallar ve önlemlerdir. Bu, uçuş sırasında güvenlik kontrolü prosedürleri, potansiyel risklerle başa çıkma yöntemleri ve yolcuların haklarını koruyan yasal düzenlemeleri içerebilir.', 
        isOpen: false 
      },
      { 
        question: 'Özel Yiyecek ve İçecek Getirme Kuralları Nelerdir?', 
        answer: 'Özel yiyecek ve içecek getirme kuralları, yolcuların uçağa kendi yiyecek ve içeceklerini getirmelerine ilişkin havayolu şirketlerinin belirlediği kuralları ifade eder. Her havayolu şirketi farklı kurallara sahip olabilir, bu nedenle önceden bilgi almak önemlidir.', 
        isOpen: false 
      },
      { 
        question: 'Çocuklar ve Evcil Hayvanlar İçin Özel Hizmetler Var mı?', 
        answer: 'Evet, birçok havayolu şirketi çocuklar ve evcil hayvanlar için özel hizmetler sunar. Bunlar arasında özel çocuk yemekleri, çocuk eğlence seçenekleri, bebek karyolaları, evcil hayvan taşıma hizmetleri ve daha fazlası bulunabilir. Ancak bu hizmetlerin kullanılabilirliği ve şartları havayolu şirketlerine göre değişiklik gösterebilir.', 
        isOpen: false 
      },
      { 
        question: 'Uçuşa Ne Zaman Gelmeliyim?', 
        answer: 'Uçuşa ne zaman gelmeniz gerektiği, havaalanı ve uçuşa göre değişiklik gösterebilir. Genel olarak, uluslararası uçuşlar için en az 2 saat önce, iç hat uçuşları için ise en az 1 saat önce havaalanında olmanız önerilir. Bu, check-in işlemleri, güvenlik kontrolü ve gideceğiniz kapıya ulaşmak için yeterli zamanı sağlar.', 
        isOpen: false 
      },
      { 
        question: 'Uçuş Sırasında Eğlence ve İnternet Hizmetleri Var mı?', 
        answer: 'Evet, birçok havayolu şirketi uçuş sırasında eğlence ve internet hizmetleri sunar. Bu hizmetler arasında film ve dizi izleme, oyun oynama, müzik dinleme, internete erişim ve daha fazlası bulunabilir. Ancak bu hizmetlerin kullanılabilirliği uçuş tipine, havayolu şirketine ve uçuş mesafesine göre değişebilir.', 
       
      }
    ])
    
  
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
       {flightimages.map(image => (
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



const FlightPlan = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const { data, error } = await supabase
          .from('flights')
          .select('id, from, to, price, airline, photo');

        if (error) {
          throw error;
        }

        setFlights(data);
      } catch (error) {
        console.error('Error fetching flights:', error.message);
      }
    };

    fetchFlights();
  }, []);

  return (
    <div>
      <ul  className="flight-box">
        {flights.map((flight, index) => (
          <li key={index}>
          <Link to={`/flight/${flight.id}`}> <img src={flight.photo} alt={flight.to} /></Link> 
            <p>Kalkış: {flight.from}</p>
            <p>Varış: {flight.to}</p>
            <p>Fiyat: {flight.price}</p>
            <p>Havayolu: {flight.airline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default function Flights()
{

   
      
  return(
    <>
   <div className="slider">
        <MainSwiper />
      </div>
    <div className="home">
      
      <div className="booking">
       <BookingSection />
      
      </div>
      <div className="flight-deals">
          <div className="deal-info">
            <h2>Uçuş Paketleri</h2>
            <FlightPlan />
          </div>
          <div className="flight-deal">

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
      <div className="faq">
        <div className="faq-info">
            <h2>Uçmadan Önce</h2>
            <p>Sıkça Aldığımız Sorular</p>
        </div>
        <Sss />
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


        <div className="recent-articles">

        </div>
        </div>

      
      
    </>
  )
}