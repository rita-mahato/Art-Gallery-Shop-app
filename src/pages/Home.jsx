import React from 'react'
import { LatestPainting } from '../components/LatestPainting/LatestPainting'
import { Popular } from '../components/Popular/Popular'
import { Offer } from '../components/Offers/Offer'
import { NewCollections } from '../components/NewCollections/NewCollections'
import { ImageSlider } from '../components/ImageSlider/ImageSlider'
import { NewsLetter } from '../components/NewsLetter/NewsLetter'

export const Home = () => {
  const ImageContainer = {
    width: "900px",
    height: "500px",
    margin: "0 auto",
    backgroundColor: 'rgb(227, 230, 234)',
}
  return (
    <div>
      <div style={ImageContainer} >
            <ImageSlider />
             {/* <ImageSlider slides={slides} /> */}
            </div>
      <LatestPainting/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}
