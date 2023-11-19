import React from 'react'
import Grey_wavy_line from '/src/assets/Images/Greywavyline.svg'


const Newsletter = () => {
  return (
    <section className="newsletter">
        <img className="background_lines_right" src={Grey_wavy_line} alt="Grey wavy line" />  
        <div className="container">
            <h2>Get News Updated By Signup</h2>
            <form>
                <input type="text" placeholder="username@domain.com" />
                <button className="btn-login">Subscribe <i className="fa-solid fa-arrow-up-right"></i></button>
            </form>
        </div>
    </section>
  )
}

export default Newsletter