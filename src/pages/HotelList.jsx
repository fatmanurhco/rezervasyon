import React, { useState, useEffect } from 'react';
import { supabase } from '../compoments/SupaBase';
import { Link } from 'react-router-dom';
import '../ReviewSlider.css'

const HotelList = () => {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const { data, error } = await supabase
        .from('hotel')
        .select('id, name, location, price, photo');

      if (error) {
        console.error('Error fetching hotels:', error);
      } else {
        setHotel(data);
      }
    };

    fetchHotels();
  }, []);

  return (
  <>
  <span className="theme">
    <h2>OTEL LİSTESİ</h2>
  </span>
  
    <div className="hotel-list-container">
      
      {hotel.length > 0 ? (
        <ul className="hotel-list">
          {hotel.map((h) => (
            <li key={h.id} className="hotel-item">
                <img src={h.photo} alt={h.location} />
                <span className="item-info">
                <Link to={`/hotel/${h.id}`}><h2>{h.name}</h2></Link>    
              <p>Lokasyon: {h.location}</p>
              <p>Fiyat: {h.price} TL</p>
                </span>
              
            </li>
            
          ))}
        </ul>
        
      ) : (
        <p>Otel bulunamadı</p>
      )}
    </div>
    </>
  );
};

export default HotelList;
