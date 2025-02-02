import React, { useState } from 'react';
import './NewsLetter.css';

export const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }
    
    // API call placeholder
    setMessage("Thank you for subscribing!");
    setEmail(""); // Reset input after submission
  };

  return (
    <div className='newsletters'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="newsletter-input">
            <input 
              type="email" 
              placeholder='Your Email ID' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <button onClick={handleSubscribe}>Subscribe</button>
        </div>
        {message && <p className="newsletter-message">{message}</p>}
    </div>
  );
};



// import React from 'react'
// import './NewsLetter.css'

// export const NewsLetter = () => {
//   return (
//     <div className='newletters'>
//         <h1>Get Exclusive Offers On Your Email</h1>
//         <p>Subscribe to our newletter and stay updated</p>
//         <div>
//             <input type="email" placeholder='Your Email id' />
//             <button>Subscribe</button>
//         </div>
//     </div>
//   )
// }
