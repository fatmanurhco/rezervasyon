
import { Link } from 'react-router-dom';
import "../App.css"
import logo from "/logo-black.png"
import { useState } from 'react';
export default function Header () {
return(
        <>
            
            <header className='header'>
              
            <div>
                    <Link to='/'><img src={logo}/></Link>
                </div>
            
            <label className="hamburger">
                <input type="checkbox" name="hamburger-menu"/>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
            </label>

        <div className="mobile-menu">
            <div className="overlay-content">
            <ul>
                        <li className='list-item'>
                            <Link to="/">Anasayfa</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/flights">Uçak</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/hotel">Otel</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/car">Araba</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/cruise">Gemi</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/tour">Tur</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/gallery">Galeri</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/events">Etkinlik</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/basket">Sepet</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/login">Üye ol</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/register">Giriş</Link>
                        </li>
                    </ul>  
                
            </div>
</div>

                <nav className='navbar'>
                <ul>
                        <li className='list-item'>
                            <Link to="/">Anasayfa</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/flights">Uçak</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/hotel">Otel</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/car">Araba</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/cruise">Gemi</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/tour">Tur</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/gallery">Galeri</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/events">Etkinlik</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/basket">Sepet</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/login">Üye ol</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/register">Giriş</Link>
                        </li>
                    </ul>   
                </nav>

               

            </header>
          
        </>
    )
}