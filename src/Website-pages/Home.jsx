import React from 'react'
import Header_part from '../Components/Header/Header_part'
import Showcase from '../Components/Home/Showcase'
import Partnerlogos from '../Components/Home/Partnerlogos'
import Features from '../Components/Home/Features'
import Aboutcompany from '../Components/Home/Aboutcompany'
import Ourservices from '../Components/Home/Ourservices'
import Whychoose from '../Components/Home/Whychoose'
import Projectandcase from '../Components/Home/Projectandcase'
import Meetourteam from '../Components/Home/Meetourteam'
import Testimonials from '../Components/Home/Testimonials'
import Articleandnews from '../Components/Home/Articleandnews'
import Newsletter from '../Components/Home/Newsletter'
import Summary from '../Components/Home/Summary'
import Footer_part from '../Components/Footer/Footer_part'


const Home = () => {
    return (
      <div className="wrapper">
        <Header_part />
        <Showcase />
        <Partnerlogos />
        <Features />
        <Aboutcompany />
        <Ourservices />
        <Whychoose />
        <Projectandcase />
        <Meetourteam />
        <Testimonials />
        <Articleandnews />
        <Newsletter />
        <Summary />
        <Footer_part />
      </div>
    )
  }
  
  export default Home