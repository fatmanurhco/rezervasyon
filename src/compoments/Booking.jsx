import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MusteriBilgisi(){

    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);

    

        // redirect to feed
        navigate('/');
    }
    return(
        <>
        <form onSubmit={handleSubmit} autoComplete="off">
                <input required type="text" placeholder="Ad" name="name" />
                <input required type="text" placeholder="Soyad" name="surname" />
                <input required type="email" placeholder="E-Posta Adresi" name="email" />
                <input required type="tel" placeholder="Şifre" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                <textarea name="requirements" id="" cols="30" rows="10"></textarea>
                <button>Next</button>
            </form>
        </>
    )
}
function OdemeBilgisi(){

    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);

    

        // redirect to feed
        navigate('/');
    }
    return(
        <>
        <form onSubmit={handleSubmit} autoComplete="off">
                <input required type="text" placeholder="Ad" name="name" />
                <input required type="text" placeholder="Soyad" name="surname" />
                <input  type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" 
         autoComplete="cc-number" maxLength="19" 
         placeholder="xxxx-xxxx-xxxx-xxxx" required />
                <button>Next</button>
            </form>
        </>
    )
}
function RezervasyonBilgisi(){

    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);

    

        // redirect to feed
        navigate('/');
    }
    return(
        <>
        
<div class="travellers-info booking-border">
<h4>Traveler Information</h4>
<table>
<tbody><tr>
<td>Booking Number</td>
<td>5784-BD245</td>
</tr>
<tr>
<td>First Name</td>
<td>Jessica</td>
</tr>
<tr>
<td>Last Name</td>
<td>Brown</td>
</tr>
<tr>
<td>Email Address</td>
<td>info#jessica.com</td>
</tr>
<tr>
<td>Street Address and number</td>
<td>353 Third floor Avenue</td>
</tr>
<tr>
<td>Town/City</td>
<td>Paris</td>
</tr>
<tr>
<td>ZIP Code</td>
<td>75800-875</td>
</tr>
<tr>
<td>Country</td>
<td>France</td>
</tr>
</tbody></table>
</div>
        
        </>
    )
}


const BookingSection = () => {
  const [activeTab, setActiveTab] = useState('customer');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="booking">
      
                  <li className={activeTab === 'customer' ? 'active' : ''}>
                    <a data-toggle="customer" onClick={() => handleTabChange('customer')} href="#info">
                      <i className="fa fa-check-circle"></i> Müşteri Bilgisi
                    </a>
                  </li>
                  <li className={activeTab === 'payment' ? 'active' : ''}>
                    <a data-toggle="tab" onClick={() => handleTabChange('payment')} href="#payment">
                      <i className="fa fa-check-circle"></i> Ödeme Bilgisi
                    </a>
                  </li>
                  <li className={activeTab === 'booking' ? 'active' : ''}>
                    <a data-toggle="tab" onClick={() => handleTabChange('booking')} href="#booking">
                      <i className="fa fa-check-circle"></i> Rezervasyon Bilgisi
                    </a>
                  </li>
             
              

              <div className="tab-content">
                <div id="customer" className={`tab-pane fade ${activeTab === 'customer' ? 'in active' : ''}`}>
                  <MusteriBilgisi />
                </div>
                <div id="payment" className={`tab-pane fade ${activeTab === 'payment' ? 'in active' : ''}`}>
                 <OdemeBilgisi />
                </div>
                <div id="booking" className={`tab-pane fade ${activeTab === 'booking' ? 'in active' : ''}`}>
                  <RezervasyonBilgisi />
                </div>
              </div>
    

         
            
        
    </section>
    
  );
};

export default BookingSection;