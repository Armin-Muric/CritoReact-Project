import React from 'react'
import News_01 from '/src/assets/Images/Woman beside table image.png'
import News_02 from '/src/assets/Images/Chat GPT image.png'
import News_03 from '/src/assets/Images/Books and a phone image.png'

const Articleandnews = () => {
  return (
    <section className="article_news">
            <div className="container">
                <div className="article_title">
                    <div className="section_title">
                        <p>Article & News</p>
                        <h2>Get Every Single Articles & News</h2>
                    </div>
                    <div className="browse_articles">
                        <button className="btn-transparent">Browse Articles <i className="fa-solid fa-arrow-up-right"></i></button>
                    </div>
                </div>
                <div className="business_articles">
                    <article>
                        <img src={News_01} />
                        <p>Business</p>
                        <h3>How To Use Digitalization In The Classroom</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </article>
                    <article>
                        <img src={News_02} />
                        <p>Business</p>
                        <h3>How To Implement Chat GPT In Your Projects</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </article>
                    <article>
                        <img src={News_03} />
                        <p>Business</p>
                        <h3>The Guide To Support Modern CSS Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </article>
                </div>
                <div className="slider_dots">
                    <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                    <a href="#"><i className="fa-duotone fa-circle"></i></a>
                    <a href="#"><i className="fa-duotone fa-circle"></i></a>
                    <a href="#"><i className="fa-duotone fa-circle"></i></a>
                    <a href="#"><i className="fa-duotone fa-circle"></i></a>
                </div>
            </div>
        </section>
  )
}

export default Articleandnews