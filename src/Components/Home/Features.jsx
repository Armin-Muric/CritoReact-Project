import React from 'react'
import Business from '/src/assets/Images/Handshake image.svg'
import Startup from '/src/assets/Images/Lightbulb Image.svg'
import Financial from '/src/assets/Images/Graph Image.svg'
import Risk from '/src/assets/Images/Box Image.svg'

const Features = () => {
  return (
    <section className="features_section">
        <div className="features_border">
            <div className="container">
                <div className="section_title">
                    <p>Features</p>
                    <h2>Our Accounting is trusted by thousand of companies</h2>
                    <button className="btn-login">Learn More <i className="fa-solid fa-arrow-up-right"></i></button>
                </div>
                <div className="business_advice">
                    <article>
                        <img src={Business} />
                        <h3>Business Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </article>
                    <article>
                        <img src={Startup} />
                        <h3>Startup Business</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </article>
                    <article>
                        <img src={Financial} />
                        <h3>Financial Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </article>
                    <article>
                        <img src={Risk} />
                        <h3>Risk Management</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features