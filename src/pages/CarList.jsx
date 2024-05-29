import React, { useState, useEffect } from 'react';
import { supabase } from '../compoments/SupaBase';
import { Link } from 'react-router-dom';
import '../ReviewSlider.css'

const CarList = () => {
  const [car, setCar] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const { data, error } = await supabase
        .from('cars')
        .select('id, model, price, available, photo')

      if (error) {
        console.error('Error fetching hotels:', error);
      } else {
        setCar(data);
      }
    };

    fetchCars();
  }, []);

  return (
  <>
  <span className="theme">
    <h2>ARABA LİSTESİ</h2>
  </span>
  
    <div className="hotel-list-container">
      
      {car.length > 0 ? (
        <ul className="hotel-list">
          {car.map((h) => (
            <li key={h.id} className="hotel-item">
                <img src={h.photo} alt={h.to} />
                <span className="item-info">
                <Link to={`/car/${h.id}`}><h2>{h.model}</h2></Link>    
              <p> Fiyat: {h.price} TL</p>
              <p>Adet: {h.available}</p>
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

export default CarList;
