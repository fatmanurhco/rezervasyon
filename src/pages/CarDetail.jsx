import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../compoments/SupaBase';


const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      const { data, error } = await supabase
      .from('cars')
      .select('id, model, price,available, photo')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching hotel details:', error);
      } else {
        setCar(data);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (!car) {
    return <p>Loading...</p>;
  }

  return (
    <div className="hotel-detail-container">
       <img src={car.photo} alt={car.model} />
         <h2>{car.model}</h2>  
        <p> Fiyat: {car.price} TL</p>
        <p>Adet: {car.available}</p>
               
      
    </div>
  );
};

export default CarDetail;
