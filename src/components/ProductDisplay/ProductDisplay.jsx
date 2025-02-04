import React, { useState, useContext } from 'react';
import './ProductDisplay.css';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ArtContext } from '../../context/ArtContext';

const ProductDisplay = ({ product }) => {
    const { addToCart } = useContext(ArtContext);
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(product.id);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000); // Hide message after 2 seconds
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">₹ {product.old_price}</div>
                    <div className="productdisplay-right-price-new">₹ {product.new_price}</div>
                </div>
                <div className="productdisplay-right-size">
                    <h1>Size : {product.size}</h1>
                </div>
                <button onClick={handleAddToCart}>
                    {added ? "Added!" : "ADD TO CART"}
                </button>
                {added && <p className="cart-added-message">Item added to cart ✅</p>}
                <p className='productdisplay-right-category'><span>Shipping included</span></p>
                <p className='productdisplay-right-category'><span>Delivery time: 5-7 business days</span></p>
            </div>
        </div>
    );
}

export default ProductDisplay;


// import React, { useContext } from 'react'
// import './ProductDisplay.css'
// import StarIcon from '@mui/icons-material/Star';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import { ArtContext } from '../../context/ArtContext';

// const ProductDisplay = (props) => {
//     const {product} =props;
//     const {addToCart} = useContext(ArtContext);
//   return (
//     <div className='productdisplay'>
//         <div className="productdisplay-left">
//             <div className="productdisplay-img">
//                 <img className="productdisplay-main-img"src={product.image} alt="" />
//             </div>
//         </div>
//         <div className="productdisplay-right">
//             <h1>{product.name}</h1>
//             <div className="productdisplay-right-star">
//                 {/* <img src={StarIcon} alt="" /> */}
//                 <StarIcon/>
//                 <StarIcon/>
//                 <StarIcon/>
//                 <StarIcon/>
//                 <StarBorderIcon/>
//                 <p>(122)</p>
//             </div>
//             <div className="productdisplay-right-prices">
//                 <div className="productdisplay-right-price-old">
//                 ₹ {product.old_price}
//                 </div>
//                 <div className="productdisplay-right-price-new">
//                 ₹ {product.new_price}
//                 </div>
//             </div>
//             {/* <div className="productdisplay-right-description">
                
//             </div> */}
//             <div className="productdisplay-right-size">
//                 <h1>Size :  {product.size}</h1>
//             </div>
//             <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
//             <p className='productdisplay-right-category'><span>Shipping included</span></p>
//             <p className='productdisplay-right-category'><span>Delivery time: 5-7 business days</span></p>
//         </div>
//     </div>
//   )
// }

// export default ProductDisplay