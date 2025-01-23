import React from 'react'
import './Offer.css'
import img2 from '../Images/img_2.png'

export const Offer = () => {
  return (
    <div className='offers'>
     <div className="offers-left">
      <h1>Exclusive</h1>
      <h1>Offers For You</h1>
      <button>Check Now</button>
     </div>
     <div className="offers-right">
      <img src={img2} alt="" />
     </div>
    </div>
  )
}
