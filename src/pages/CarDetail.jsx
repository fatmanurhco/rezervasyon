import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../compoments/SupaBase';


const CarDetail = () => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarDetails = async () => {
      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .eq('id')  // Change '1' to the ID of the car you want to fetch
        .single();

      if (error) {
        console.error('Error fetching car details:', error);
      } else {
        setCar(data);
      }
      setLoading(false);
    };

    fetchCarDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!car) {
    return <div>No car details found</div>;
  }

  return (
    <div className="car-detail">
      <span className="theme">
    <h2>ARABA KİRALAMA</h2>
  </span>
      <div className="car-detail-header">
        <h1>{car.model}</h1>
        <p>{car.price} TL</p>
      </div>
      <div className='main-car-detail'>
        <img src={car.photo} alt={car.model} />
        <section className='car-detail-section'>
          <h2>Açıklama</h2>
          <p>{car.description}</p>
        </section>
        <section className='car-detail-section'>
          <h2>Özellikler</h2>
          <ul>
            {car.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Yorumlar</h2>
          {car.reviews.length > 0 ? (
            <ul>
              {car.reviews.map((review, index) => (
                <li key={index}>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Henüz Yorum Yok</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default CarDetail;
