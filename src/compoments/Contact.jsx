import React, { useState } from 'react';
import { supabase } from "../compoments/SupaBase";
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase.from('contact_messages').insert({
        name,
        email,
        phone,
        message,
      });

      if (error) {
        setErrorMessage('Mesajınız gönderilirken bir hata oluştu.');
        console.error('Supabase error:', error);
      } else {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setErrorMessage('');
        alert('Mesajınız başarıyla gönderildi!');
      }
    } catch (err) {
      console.error('Supabase error:', err);
      setErrorMessage('Mesajınız gönderilirken bir hata oluştu.');
    }
}
    return(
    <section className="contact-main pad-top-0 contact1 bg-white">
    <div className="map mar-bottom-60">
      <div id="map" style={{ height: 535, width: '100%' }}></div>
    
    </div>
    <div className="container">
      <div className="contact-support mar-bottom-30">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="support-item">
              <h3>Costumer Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit facilisis nisi.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="support-item">
              <h3>Technical Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit facilisis nisi.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="support-item">
              <h3>Booking Queries</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit facilisis nisi.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="contact-info">
              <div className="info-item mar-bottom-30">
                <div className="info-icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="info-content">
                  <p>445 Mount Eden Road, Mt Eden</p>
                  <p>Basundhara Chakrapath</p>
                </div>
              </div>
              <div className="info-item info-item-or mar-bottom-30">
                <div className="info-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="info-content">
                  <p>977-444-666-888</p>
                  <p>977-444-222-000</p>
                </div>
              </div>
              </div>
              </div>

        </div>
        </div>
        </div>
        </section>

              );
  
            }
            export default Contact;