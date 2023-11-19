import React from 'react'
import Process_icon from '/src/assets/Images/Thumbsup.svg'
import Strategic_icon from '/src/assets/Images/Diamond.svg'
import Experience_icon from '/src/assets/Images/Inkpen.svg'
import Artificial_icon from '/src/assets/Images/Cogwheelbrain.svg'
import Why_chose_us from '/src/assets/Images/Two women speaking.png'

const Whychoose = () => {
  return (
    <section className="why_us_section">
        <div className="container">
            <div className="why_text">
                <div className="section_title">
                    <p>Why Choose Us</p>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                </div>
                <div className="consulting_agency">
                    <article>
                        <img src={Process_icon} />
                        <h3>Process Excellence</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur.</p>
                    </article>
                    <article>
                        <img src={Strategic_icon} />
                        <h3>Strategic Planning</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur.</p>
                    </article>
                    <article>
                        <img src={Experience_icon} />
                        <h3>Experience Design</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur.</p>
                    </article>
                    <article>
                        <img src={Artificial_icon} />
                        <h3>Artificial Inteligenece</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur.</p>
                    </article>
                </div>
            </div>
            <div className="meeting_big">
                <div className="meeting_img">
                    <img src={Why_chose_us} />
                </div>
                <div className="meeting"></div>
            </div>
        </div>
    </section>
  )
}

export default Whychoose