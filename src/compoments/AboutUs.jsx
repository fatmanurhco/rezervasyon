import React from 'react';
import { supabase } from "../compoments/SupaBase";
import { useEffect, useRef, useState } from "react";


export function WhyUs() {
    return (
      <section className="why-us pad-top-80">
        <div className="container">
          <div className="why-us-about mar-bottom-60">
            <div className="row display-flex">
              <div className="col-md-6 col-xs-12">
                <div className="why-about-inner">
                  <h4>Amazing Places To Enjoy Your Travel</h4>
                  <h2>About Our Super Travel</h2>
                  <p>
                    Aliquam erat volutpat. Curabitur tempor nibh quis arcu
                    convallis, sed viverra quam sollicitudin. Proin sed augue sed
                    neque ultricies condimentum. In ac ultrices lectus. Nullam ex
                    elit, vestibulum ut urna non, tincidunt condimentum sem. Sed
                    enim tortor, accumsan at consequat et, tempus sit amet.
                  </p>
                  <a href="#" className="biz-btn biz-btn1">Read More</a>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="why-about-image">
                  <img src="images/hometype1.jpg" alt="about" />
                </div>
              </div>
            </div>
          </div>
          <div className="why-us-box">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="why-us-item display-flex">
                  <div className="why-us-icon">
                    <i className="flaticon-price"></i>
                  </div>
                  <div className="why-us-content mar-left-20">
                    <h3 className="mar-bottom-10">Competitive Pricing</h3>
                    <p className="mar-0">
                      With 500+ suppliers and the purchasing power of 300 million
                      members
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="why-us-item display-flex">
                  <div className="why-us-icon">
                    <i className="flaticon-quality"></i>
                  </div>
                  <div className="why-us-content mar-left-20">
                    <h3 className="mar-bottom-10">Award Winning Service</h3>
                    <p className="mar-0">
                      Travel worry free knowing that here present we're here if
                      you need us, 24 hours a day
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="why-us-item display-flex">
                  <div className="why-us-icon">
                    <i className="flaticon-global"></i>
                  </div>
                  <div className="why-us-content mar-left-20">
                    <h3 className="mar-bottom-10">Worldwide Coverage</h3>
                    <p className="mar-0">
                      1,200,000 hotels in more than 200 countries and regions &
                      flights to over 5,000 cities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

function TopServices() {
  return (
    <section className="why-us pad-top-70 bg-grey">
      <div className="container">
        <div className="section-title">
          <h2>Top <span>Services</span></h2>
          <p className="mar-0">
            Lorem Ipsum is simply dummy text the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="why-us-box">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="why-us-item why-us-item1 text-center">
                <div className="why-us-icon">
                  <i className="flaticon-price"></i>
                </div>
                <div className="why-us-content">
                  <h3>Reliable Pricing</h3>
                  <p className="mar-0">
                    Once a year join us on adventures to other parts of the world.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="why-us-item why-us-item1 text-center">
                <div className="why-us-icon">
                  <i className="flaticon-add-user"></i>
                </div>
                <div className="why-us-content">
                  <h3>Easy Joining</h3>
                  <p className="mar-0">Contact us and you're booked in 2 minutes.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="why-us-item why-us-item1 text-center">
                <div className="why-us-icon">
                  <i className="flaticon-global"></i>
                </div>
                <div className="why-us-content">
                  <h3>Expert Hikers</h3>
                  <p className="mar-0">Our mountains have taught us everything we know.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="why-us-item why-us-item1 text-center">
                <div className="why-us-icon">
                  <i className="flaticon-user"></i>
                </div>
                <div className="why-us-content">
                  <h3>Experienced Team</h3>
                  <p className="mar-0">We've always lived amidst amazing nature.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
    return (
      <section className="call-to-action">
        <div className="container">
          <div className="row display-flex">
            <div className="col-md-6 col-xs-12">
              <div className="action-content">
                <h3 className="white package-name">SUMMER SPECIAL</h3>
                <h2 className="discounted">
                  <span>25%</span> off
                </h2>
                <h2 className="white">
                  SPEND THE BEST VACATION WITH US <br />
                  <span>The nights of Thailand</span>
                </h2>
                <p className="mar-bottom-20">4days / 5nights</p>
                <a href="#" className="biz-btn">View Details</a>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="video-click">
                <div className="video-image">
                  <img src="images/hometype1.jpg" alt="Video" /> {/* Clarified alt text */}
                </div>
                <div className="call-button">
                  <button type="button" className="play-btn js-video-button" data-video-id="152879427" data-channel="vimeo">
                    <i className="fa fa-play"></i>
                  </button>
                </div>
                <div className="video-figure"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  

function TourAgents() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      const { data, error } = await supabase.from('agents').select('*'); 
      if (error) {
        console.error('Error fetching agents:', error);
        return;
      }

      setAgents(data);
    };

    fetchAgents();
  }, []);

  return (
    <section className="tour-agent">
      <div className="container">
        <div className="section-title">
          <h2>Travel <span>Agents</span></h2>
          <p>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className="agent-main">
          <div className="row">
            {agents.map((agent) => (
              <div className="col-md-3" key={agent.id}> 
                <div className="agent-list">
                  <div className="agent-image">
                    <img src={agent.image} alt="agent" />
                    <div className="agent-content">
                      <h3 className="white mar-bottom-5">{agent.name}</h3>
                      <p className="white mar-0">{agent.title}</p>
                    </div>
                  </div>
                  <div className="agent-social">
                    <ul className="social-links">
                      <li> <a href="#"> <i className="fab fa-facebook" aria-hidden="true"></i> </a> </li>
                      <li> <a href="#"> <i className="fab fa-twitter" aria-hidden="true"></i>  </a>  </li>
                      <li>  <a href="#"> <i className="fab fa-instagram" aria-hidden="true"></i> </a> </li>
                      <li> <a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i> </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase.from('reviews').select('*'); 

      if (error) {
        console.error('Error fetching reviews:', error);
        return;
      }

      setReviews(data);
    };

    fetchReviews();
  }, []);

  return (
    <section className="home-testimonial bg-grey">
      <div className="container">
        <div className="section-title">
          <h2>Our Happy Costumers</h2>
          <p>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className="row testimonial-slider">
          {reviews.map((review) => (
            <div className="ts-item col-md-4" key={review.id}> {/* Use review.id as key */}
              <div className="ts-image">
                <img src={review.image} alt="image" />
              </div>
              <div className="ts-content">
                <h4 className="mar-bottom-5">{review.name}</h4>
                <p className="mar-bottom-5">{review.title}</p>
                <ul className="list-inline">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <li key={index}>
                      <i className={`fa fa-star ${review.rating >= index + 1 ? 'checked' : ''}`}></i>
                    </li>
                  ))}
                </ul>
                <p className="content mar-0">{review.content}</p>
                <div className="ts-icon">
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutUs()
{
    return(
        <>
        <WhyUs />
        <TopServices />
        <CallToAction />
        <TourAgents />
        <Reviews />
        </>
    )
}