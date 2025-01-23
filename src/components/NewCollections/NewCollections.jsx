import React from 'react'
import './NewCollection.css'
import new_collection from '../Images/new_collections'
import { Items } from '../Items/Items'

export const NewCollections = () => {
  return (
    <div className='new-Collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} style={{
                width: '100%',
                maxWidth: '300px',
                height: 'auto',
              }} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}
