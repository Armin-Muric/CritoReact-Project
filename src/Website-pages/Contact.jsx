import React from 'react'
import Header_part from '../Components/Header/Header_part'
import Letsconnect from '/src/Components/Contact/Letsconnect'
import Contactinfo from '/src/Components/Contact/ContactInfo'
import Forminput from '/src/Components/Contact/Forminput'
import Googlemaps from '/src/Components/Contact/Googlemaps'
import Summary from '/src/Components/Home/Summary'
import Footer_part from '../Components/Footer/Footer_part'

const Contact = () => {
  return (
    <div className='wrapper'>
        <Header_part />
        <Letsconnect />
        <Contactinfo />
        <Forminput />
        <Googlemaps />
        <Summary />
        <Footer_part />
    </div>
  )
}

export default Contact