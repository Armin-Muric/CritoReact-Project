import React from 'react'
import Suit_showcase from '/src/assets/Images/Image of man in a suit.svg'
import Line_showcase from '/src/assets/Images/Whiteline-Showcase.svg'


const Showcase = () => {
  return (
    <section className="showcase">
        <div className="container">                    
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <a className="btn-login" href="#">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></a>
                <a className="btn-transparent" href="#">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                <img className="whitelines_showcase" src={Line_showcase} alt="white lines overlapping" />
            </div>
            <img className="suitman" src={Suit_showcase} alt="image of a man in a suit with a tablet" />  
        </div>
    </section>
  )
}

export default Showcase