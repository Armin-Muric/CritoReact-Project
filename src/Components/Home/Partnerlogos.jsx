import React from 'react'
import Paperz from '/src/assets/Images/PAPERZ Image.svg'
import Dorfus from '/src/assets/Images/DORFUS image .svg'
import Martino from '/src/assets/Images/MARTINO image.svg'
import Square from '/src/assets/Images/SQUARE image.svg'
import Gobona from '/src/assets/Images/GOBONA image.svg'

const Partnerlogos = () => {
  return (
    <section className="companies">
        <div className="company_logos">
            <img className="paperz" src={Paperz}/>
            <img className="paperz" src={Dorfus}/>
            <img className="paperz" src={Martino}/>
            <img className="paperz" src={Square}/>
            <img className="paperz" src={Gobona}/>
        </div>
    </section>
  )
}

export default Partnerlogos