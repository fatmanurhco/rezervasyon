import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../compoments/SupaBase';


const FlightDetail = () => {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      const { data, error } = await supabase
        .from('flights')
        .select('id, from, to, price, airline, photo,departure,return')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching hotel details:', error);
      } else {
        setFlight(data);
      }
    };

    fetchFlightDetails();
  }, [id]);

  if (!flight) {
    return <p>Loading...</p>;
  }

  return (
    <div className="hotel-detail-container">
        <img src={flight.photo} alt="" />
      <h1>{flight.from}</h1>
      <h1>{flight.to}</h1>
      <p> {flight.airline}</p>
      <p> {flight.departure}</p>
      <p> {flight.return}</p>
      <p>Fiyat: {flight.price} TL</p>
      
    </div>
  );
};

export default FlightDetail;
