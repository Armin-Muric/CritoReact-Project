import React from 'react'
import Visit_us from '/src/assets/Images/Visit-us.svg'
import Call_us from '/src/assets/Images/Call-us.svg'
import Email_us from '/src/assets/Images/Email-us.svg'

const ContactInfo = () => {
  return (
    <section className="contact_section">
            <div className="container">
                <div className="contact_info">
                    <div className="contact_us">
                        <img src={Visit_us} />
                        <div className="contact_details">
                            <h3>Visit Us</h3>
                            <p>Sveavägen 31 </p>
                            <p>111 34 STOCKHOLM</p>
                        </div>
                    </div>
                    <div className="contact_us">
                        <img src={Call_us} />
                        <div className="contact_details">
                            <h3>Call Us</h3>
                            <p>+46 (8) 121 470 50</p> 
                            <p>+46 (8) 121 470 51</p>
                        </div>
                    </div>
                    <div className="contact_us">
                        <img src={Email_us} />
                        <div className="contact_details">
                            <h3>Email Us</h3>
                            <p>info@crito.com</p>
                            <p>support@crito.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ContactInfo