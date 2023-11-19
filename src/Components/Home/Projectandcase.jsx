import React from 'react'
import Newspaper from '/src/assets/Images/a man hands reading a business newspaper.png'
import Appleproducts from '/src/assets/Images/Pink Apple products.png'
import Desk from '/src/assets/Images/Desk with office supplies.png'
import Bintel from '/src/assets/Images/Laptop with business intelligante insights.png'

const Projectandcase = () => {
  return (
    <section className="project_section">
        <div className="container">
            <div className="section_title">
                <p> Project & Case Studies</p>
                <h2> Let´s Looks Our Global Projects</h2>
            </div>
            <div className="project_and_cases">
                <article>
                    <img src={Newspaper} />
                    <h3>Grow your business</h3>
                    <a href="#">Read more <i className="fa-regular fa-arrow-up-right"></i></a>
                </article>
                <article>
                    <img src={Appleproducts} />
                    <h3>Why your client needs a responsive website</h3>
                    <a href="#">Read more <i className="fa-regular fa-arrow-up-right"></i></a>
                </article>
                <article>
                    <img src={Desk} />
                    <h3>Educate your employees to get better results</h3>
                    <a href="#">Read more <i className="fa-regular fa-arrow-up-right"></i></a>
                </article>
                <article>
                    <img src={Bintel} />
                    <h3>Business Insights is a important piece of your business</h3>
                    <a href="#">Read more <i className="fa-regular fa-arrow-up-right"></i></a>
                </article>
            </div>
            <div className="center_content">
                <a className="btn-black" href="#">All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Projectandcase