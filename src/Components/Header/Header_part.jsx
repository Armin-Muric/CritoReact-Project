import React from 'react'
import Logo from '/src/assets/Images/CritoLogo.svg'

const Header_part = () => {
  return (
    <header>
        <div className="container">
            <a href="Home"><img src={Logo}/></a>
            <button className="menu_hamburger"><i className="fa-regular fa-burger"></i></button>
            <div className="menu">
                <div className="top_menu">
                    <div className="contact_menu">
                        <div className="contact_info">
                            <i className="fa-light fa-phone-volume"></i>
                            +46 (8)121 470 50
                        </div>
                        <div className="contact_info">
                            <i className="fa-light fa-envelope"></i> 
                            info@crito.com
                        </div>
                        <div className="contact_info last">
                            <i className="fa-light fa-location-dot"></i> 
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>
                    <div className="social_media">
                        <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="nav_menu">
                    <nav>
                        <a className="active" href="Home">Menu</a>
                        <a href="Notfound">Service</a>
                        <a href="Notfound">News</a>
                        <a href="Contact">Contact</a>
                    </nav>
                    <a className="btn-login btn-nav" href="#">Login <i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header_part