import React, { useState, useEffect } from 'react';
import { supabase } from '../compoments/SupaBase';
import { Link } from 'react-router-dom';
import '../ReviewSlider.css'

const BlogList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from('events')
        .select('title, content,location,img,date ,id')

      if (error) {
        console.error('Error fetching hotels:', error);
      } else {
        setEvents(data);
      }
    };

    fetchEvents();
  }, []);

  return (
  <>
  <span className="theme ">
    <h2>Etkinlik Listesi</h2>
  </span>
  
  <div className="plans-container events">
      {events.map((plan) => (
        <div key={plan.id} className={`plan-card ${plan.id % 2 === 0 ? 'left' : 'right'}`}>
          <div className={`plan-photo-container ${plan.id % 2 === 0 ? 'left' : 'right'}`}>
            <img src={plan.img} alt={plan.title} className="plan-photo" />
          </div>
          <div className="plan-details">
           <Link to={`/tour/${plan.id}`}><h3 className="plan-country">{plan.title}</h3></Link> 
            <p className="plan-description">{plan.content}</p>
            <p className="plan-price">{plan.location}</p>
            <p className="plan-days"> {plan.date}</p>
          </div>
        </div>
      ))}
     
    </div>
    </>
  );
};

export default BlogList;
