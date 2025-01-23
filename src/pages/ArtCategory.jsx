import React, { useState, useEffect ,useContext } from 'react';
import './CSS/ArtCategory.css';
import { ArtContext } from '../context/ArtContext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Items } from '../components/Items/Items';
// import React, { useState, useEffect } from "react";

export const ArtCategory = (props) => {
  const { all_product } = useContext(ArtContext);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes((prev) => (prev === 0 ? 59 : prev - 1));
      if (minutes === 0) {
        setHours((prev) => (prev === 0 ? 0 : prev - 1));
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [minutes]);

  // Filter products by category
  const filteredProducts = all_product.filter(
    (item) => item.Category === props.category
  );
  
  return (
    <div className="art-category">
      <div className="art-category-banner-container">
      {/* Left Side Content */}
      <div className="art-category-banner-left">
        <h1>FLAT 50% OFF</h1>
        <p>
          {hours} Hours {minutes} Mins
        </p>
        <button className="explore-now-button">Explore now</button>
      </div>

      {/* Right Side Image */}
      <div className="art-category-banner-right">
        <img src={props.banner} alt={`${props.category} banner`} />
      </div>
    </div>
      {/* Banner Section
      <div className="art-category-banner">
        <img src={props.banner} alt={`${props.category} banner`} />
      </div> */}

      {/* Product Count and Sort UI */}
      <div className="artcategory-indexSort">
        <p>
          <span>Showing {filteredProducts.length}</span> products
        </p>
        <div className="artcategory-sort">
          Sort by <ArrowDropDownIcon />
        </div>
      </div>

      {/* Product Display */}
      <div className="artcategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              style={{
                width: '100%',
                maxWidth: '300px',
                height: 'auto',
              }}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No products available for this category.</p>
        )}
      </div>
      <div className="artCategory-loadmore">
        Explore More
      </div>
    </div>
  );
};




// import React, { useContext } from 'react'
// import './CSS/ArtCategory.css'
// import { ArtContext } from '../context/ArtContext'
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { Items } from '../components/Items/Items';
// import all_product from '../components/Images/all_product';

// export const ArtCategory = (props) => {
//   const {all_product} = useContext(ArtContext)
//   return (
//     <div className='art-category'>
      
     {/* <div className="offers-left">
      <h1>Exclusive</h1>
      <h1>Offers For You</h1>
      <button>Check Now</button>
    </div>
      <img src={props.banner} alt="" />
      <div className="artcategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="artcategory-sort">
          Sort by <ArrowDropDownIcon></ArrowDropDownIcon>
        </div>
      </div> */}
//       <div className="artcategory-products">
//         {all_product.map((item,i)=>{
//           if(props.category===item.category){
//             return <Items key={i} id={item.id} name={item.name} image={item.image} style={{
//               width: '100%',
//               maxWidth: '300px',
//               height: 'auto',
//             }} new_price={item.new_price} old_price={item.old_price}/>
//           }
//           else{
//             return null;
//           }
//         }
//         )}
//       </div>

//     </div>
//   )
// }
