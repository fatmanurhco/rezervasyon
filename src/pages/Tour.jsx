
import "../App.css"
import { useEffect, useRef, useState } from "react";
import DataCity  from "../compoments/DataCity"
import { Calendar } from 'primereact/calendar';
import { Link } from 'react-router-dom';
import { Slider } from 'primereact/slider';
import { InputText } from 'primereact/inputtext';

export default function Tour()
{
  const[date, setDate]=useState()
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState(50); 

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  }
  return(
    <>
    <div className="tourgrid">
      <div className="tour-h">
        <h3>TURLAR</h3>
      <span><Link to="/">ANASAYFA</Link><p>/TUR</p></span>
      </div><div className="tour-section">
        <div className="tour-head"></div>
        <div className="tour-list">
          <div className="tour-box"></div>
          <div className="bookform">
          <h3>BİR TUR ARAYIN</h3>
            <form>
            <label>Nereye Gitmek İstersiniz?</label>
              <select name="il" className="secim" >
                {DataCity.dataCity.map((city) => (
                <option key={city.plaka} value={city.plaka}>{city.il}</option>))}</select>
            
            <label>Gidiş Tarihi</label>
              <Calendar className="calendar"  value={date} onChange={(e) => setDate(e.value)} placeholder="dd-mm-yy" />
            
            <label>Dönüş Tarihi</label>
              <Calendar className="calendar"  value={date} onChange={(e) => setDate(e.value)} placeholder="dd-mm-yy" />
            
            <label>Yetişkin Sayısı</label>
              <select name="adult" className="secim">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            <label>Çocuk Sayısı</label>
              <select name="children" className="secim">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            <button className="btn form-btn">Hemen Bul</button>
          </form>

        </div>
        <div className="services">
        <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      24/7 Servis
    </label>
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      Otopark
    </label> <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      Bar
    </label> <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      Restorant
    </label> <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      Televizyon
    </label> <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      Asansör
    </label> <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      Valiz Deposu
    </label>
        </div>
        <div className="map">

        </div>
           <div className="tour-rating">
           <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <div className="star-rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span></div>
    </label>
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <div className="star-rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span></div>
    </label> 
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <div className="star-rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span></div>
    </label> <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <div className="star-rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span></div>
    </label> <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <div className="star-rating">
              <span className="star">&#9733;</span></div>
    </label>
            </div>   
            <div className="price-range">
            <label>Fiyat Aralığı</label>
              <InputText value={value} onChange={(e) => setValue(e.target.value)} />
              <Slider value={value} onChange={(e) => setValue(e.value)} />
            </div>
            <div className="tour-city">
            <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      İstanbul
    </label>
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      Ankara
    </label>
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      İzmir
    </label>
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      Antalya
    </label>
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      Muğla
    </label>
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      Trabzon
    </label>
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      Gaziantep
    </label>
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      Mardin
    </label>
            </div>
        </div>
      </div>
    </div>
    
    </>
  )
}