import React from 'react'
import Whitelines from '/src/assets/Images/Whitelines-contacts.svg'

const Letsconnect = () => {
  return (
    <section className="Letsconnect">
            <div className="container">
                <nav>
                    <a href="index.html">Menu</a>
                    <a className="contact_active" href="contact.html">Contact</a>
                </nav>
                <div className="title_contact">
                    <h1>Let's Connect</h1>
                </div>
                <img src={Whitelines} />
            </div>
        </section>
  )
}

export default Letsconnect