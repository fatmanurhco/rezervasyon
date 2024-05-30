import React, { useState, useEffect } from 'react';
import { supabase } from '../compoments/SupaBase';
import { Link } from 'react-router-dom';
import '../ReviewSlider.css'

const BlogList = () => {
  const [blog, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from('blog')
        .select('id, title, first_sentence, photo')

      if (error) {
        console.error('Error fetching hotels:', error);
      } else {
        setBlogs(data);
      }
    };

    fetchBlogs();
  }, []);

  return (
  <>
  <span className="theme">
    <h2>Blog Listesi</h2>
  </span>
  
    <div className="hotel-list-container">
      
      {blog.length > 0 ? (
        <ul className="hotel-list">
          {blog.map((b) => (
            <li key={b.id} className="hotel-item">
                <img src={b.photo} alt={b.title} />
                <span className="item-info">
                <Link to={`/blog/${b.id}`}><h3>{b.title}</h3></Link>    
                <p>{b.first_sentence}</p>
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

export default BlogList;
