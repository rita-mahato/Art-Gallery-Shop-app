import React from 'react'
import './Popular.css'
import data_product from '../Images/data'
import { Items } from '../Items/Items'

export const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular paintings</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i)=> {
          return <Items key={i} id={item.id} name={item.name} image={item.image} style={{
            width: '100%',
            maxWidth: '300px',
            height: 'auto',
          }} new_price={item.new_price} old_price={item.old_price}/>
        }
        )}
      </div>
    </div>

  )
}
