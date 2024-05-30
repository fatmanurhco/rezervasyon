import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../compoments/SupaBase';
import '../ReviewSlider.css';

const PAGE_SIZE = 3;

const TourPlans = () => {
  const [plans, setPlans] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchPlans(page);
  }, [page]);

  const fetchPlans = async (page) => {
    try {
      const { data, error } = await supabase
        .from('plans')
        .select('id, ülke, açıklama, fiyat, gün, img', { count: 'exact' })
        .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1);

      if (error) {
        throw error;
      }

      if (data.length < PAGE_SIZE) {
        setHasMore(false);
      }

      setPlans((prevPlans) => [...prevPlans, ...data]);
    } catch (error) {
      console.error('Error fetching plans:', error.message);
    }
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="plans-container">
      {plans.map((plan) => (
        <div key={plan.id} className={`plan-card ${plan.id % 2 === 0 ? 'left' : 'right'}`}>
          <div className={`plan-photo-container ${plan.id % 2 === 0 ? 'left' : 'right'}`}>
            <img src={plan.img} alt={plan.ülke} className="plan-photo" />
          </div>
          <div className="plan-details">
           <Link to={`/tour/${plan.id}`}><h3 className="plan-country">{plan.ülke}</h3></Link> 
            <p className="plan-description">{plan.açıklama}</p>
            <p className="plan-price">Fiyat: {plan.fiyat} TL</p>
            <p className="plan-days">Gün Sayısı: {plan.gün}</p>
          </div>
        </div>
      ))}
      {hasMore && (
        <button onClick={loadMore} className="btn form-btn tour-btn">
          Daha Fazla Yükle
        </button>
      )}
    </div>
  );
};

export default function Tour()
{return(
  <div className='tour'>
  <span className="theme ">
  <h2>Yolculuğa Hazır Mısınız?</h2>
  </span>
<TourPlans />

</div>

) 
}
