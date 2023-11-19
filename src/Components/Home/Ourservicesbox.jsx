import React from 'react'
import Blackline from '/src/assets/Images/Black-line.svg'
import Arrowblack from '/src/assets/Images/Arrow-black.svg'

const Ourservicesbox = ({title, description, url}) => {
  return (
    <article>
        <img src={Blackline} />
        <h3>{title}</h3>
        <p>{description}</p>
        <img className="arrow_black" href={url} src={Arrowblack} />
    </article>
  )
}

export default Ourservicesbox