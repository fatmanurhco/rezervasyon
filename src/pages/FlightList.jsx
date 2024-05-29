import React, { useState, useEffect } from 'react';
import { supabase } from '../compoments/SupaBase';
import { Link } from 'react-router-dom';
import '../ReviewSlider.css'

const FlightList = () => {
  const [flight, setFlight] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      const { data, error } = await supabase
        .from('flights')
        .select('id, from, to, price, airline, photo,departure,return')

      if (error) {
        console.error('Error fetching hotels:', error);
      } else {
        setFlight(data);
      }
    };

    fetchFlights();
  }, []);

  return (
  <>
  <span className="theme">
    <h2>UÇUŞ LİSTESİ</h2>
  </span>
  
    <div className="hotel-list-container">
      
      {flight.length > 0 ? (
        <ul className="hotel-list">
          {flight.map((h) => (
            <li key={h.id} className="hotel-item">
                <img src={h.photo} alt={h.to} />
                <span className="item-info">
                <Link to={`/flight/${h.id}`}><h2>{h.from} {h.to}</h2></Link>    
              <p> {h.airline}</p>
              <p> {flight.departure}</p>
      <p> {flight.return}</p>
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

export default FlightList;
