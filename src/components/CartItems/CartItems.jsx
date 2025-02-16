import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartItems.css';
import { ArtContext } from '../../context/ArtContext';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ArtContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/SuccessPage');
    };
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
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img className='carticon-product-icon' src={e.image} alt="" style={{ height: '62px', width: 'auto', maxWidth: '100%' }} />
                                <p>{e.name}</p>
                                <p>{e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>{e.new_price * cartItems[e.id]}</p>
                                <RemoveIcon onClick={() => { removeFromCart(e.id) }} />
                            </div>
                            <hr/>
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitem-total-items">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-items">
                            <h3>Total</h3>
                            <h3>₹{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartItems;


// import React, { useContext } from 'react'
// import './CartItems.css'
// import { ArtContext } from '../../context/ArtContext';
// import RemoveIcon from '@mui/icons-material/Remove';

// const CartItems = () => {
//     const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ArtContext);
//   return (
//     <div className='cartitems'>
//         <div className="cartitems-format-main">
//             <p>Products</p>
//             <p>Title</p>
//             <p>Price</p>
//             <p>Quantity</p>
//             <p>Total</p>
//             <p>Remove</p>
//         </div>
//         <hr/>
//             {all_product.map((e)=>{
//                 if(cartItems[e.id]>0)
//                 {
//                    return <div>
//                    <div className="cartitems-format cartitems-format-main">
//                        <img className='carticon-product-icon' src={e.image} alt=""  style={{ height: '62px', width: 'auto', maxWidth: '100%' }}/>
//                        <p>{e.name}</p>
//                        <p>{e.new_price}</p>
//                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
//                        <p>{e.new_price*cartItems[e.id]}</p>
//                        <RemoveIcon  onClick={()=>{removeFromCart(e.id)}}/>
//                    </div>
//                    <hr/>
//                    </div>
//                 }
//                 return null;
//             })}
//             <div className="cartitem-down">
//                 <div className="cartitem-total">
//                     <h1>cart Totals</h1>
//                     <div>
//                         <div className="cartitem-total-items">
//                             <p>Subtotal</p>
//                             <p>₹{getTotalCartAmount()}</p>
//                         </div>
//                         <hr />
//                         <div className="cartitem-total-items">
//                             <p>Shipping Fee</p>
//                             <p>Free</p>
//                         </div>
//                         <hr />
//                         <div className="cartitem-total-items">
//                             <h3>Total</h3>
//                             <h3>₹{getTotalCartAmount()}</h3>
//                         </div>
//                     </div>
//                     <button>PROCEED TO CHECKOUT</button>
//                 </div>
//                 <div className="cartitem-promocode">
//                     <p>If you have promo code , Enter it here</p>
//                     <div className="cartitem-promobox">
//                         <input type="text"  placeholder='promo code'/>
//                         <button>Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//   )
// }

// export default CartItems