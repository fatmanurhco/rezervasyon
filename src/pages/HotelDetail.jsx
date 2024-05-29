import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../compoments/SupaBase';


const HotelDetail = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      const { data, error } = await supabase
        .from('hotel')
        .select('id, name, location, price')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching hotel details:', error);
      } else {
        setHotel(data);
      }
    };

    fetchHotelDetails();
  }, [id]);

  if (!hotel) {
    return <p>Loading...</p>;
  }

  return (
    <div className="hotel-detail-container">
      <h1>{hotel.name}</h1>
      <p>Lokasyon: {hotel.location}</p>
      <p>Fiyat: {hotel.price} TL</p>
      
    </div>
  );
};

export default HotelDetail;
