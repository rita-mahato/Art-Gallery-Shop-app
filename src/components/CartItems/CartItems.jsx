import React, { useContext } from 'react'
import './CartItems.css'
import { ArtContext } from '../../context/ArtContext';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItems = () => {
    const {all_product,cartItems,removeFromCart} = useContext(ArtContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
            {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                   return <div>
                   <div className="cartitems-format cartitems-format-main">
                       <img className='carticon-product-icon' src={e.image} alt="" />
                       <p>{e.name}</p>
                       <p>{e.new_price}</p>
                       <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                       <p>{e.new_price*cartItems[e.id]}</p>
                       <RemoveIcon  onClick={()=>{removeFromCart(e.id)}}/>
                   </div>
                   <hr/>
                   </div>
                }
            })}
        </div>
  )
}

export default CartItems