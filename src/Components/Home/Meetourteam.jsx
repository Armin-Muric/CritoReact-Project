import React from 'react'
import KristinePalmer from '/src/assets/Images/Kristine Palmer image.png'
import MarkAuburi from '/src/assets/Images/Mark Auburi image.png'
import KimberlyHansen from '/src/assets/Images/Kimberly Hansen image.png'
import JustinWilloman from '/src/assets/Images/Justin Willoman image.png'

const Meetourteam = () => {
  return (
    <section className="Meetourteam">
        <div className="container">
            <div className="meet_team">
                <div className="section_title">
                    <p>Meet Our Team</p>
                    <h2>Experience Team Members</h2>
                </div>
                <div className="browse_team">
                    <button className="btn-login">Browse Team <i className="fa-solid fa-arrow-up-right"></i></button>
                </div>
            </div>
            <div className="team_members">
                <div className="names_title">
                    <img src={KristinePalmer} alt="" />
                    <h3>Kristine Palmer</h3>
                    <p>Chef Operation Officer</p>   
                </div>
                
                <div className="names_title">
                    <img src={MarkAuburi} alt="" />
                    <h3>Mark Aubri</h3>
                    <p>Senior Consultant</p>   
                </div>
                
                <div className="names_title">
                    <img src={KimberlyHansen} alt="" />
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>   
                </div>
                
                <div className="names_title">
                    <img src={JustinWilloman} alt="" />
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>   
                </div>
            </div>
            <div className="slider_dots">
                <a href="#"><i className="fa-duotone fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-duotone fa-circle"></i></a>
                <a href="#"><i className="fa-duotone fa-circle"></i></a>
                <a href="#"><i className="fa-duotone fa-circle"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Meetourteam