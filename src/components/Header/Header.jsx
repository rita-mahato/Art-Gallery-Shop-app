import React, { useState } from 'react';
import ColorLensIcon from '@mui/icons-material/ColorLensOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Header.css';

export const Header = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');
    console.log('Searching for:', input);
    // Simulate a search process
    setTimeout(() => {
      setLoading(false);
      setMessage(`Results for "${input}"`);
    }, 1000); // Replace with actual API call
  };

  return (
    <div className='header'>
      <div className='nav-logo'>
        <ColorLensIcon className='icon-large' />
        <p>Art Gallery</p>
      </div>
      <div className='search'>
        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            value={input}
            type='text'
            placeholder='Search painting'
            name='search'
            required
          />
          <button className='submit' type='submit' disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
        {message && <p className='search-message'>{message}</p>}
      </div>
      <div className='footer'>
        <ul className='footer-links' style={{ listStyleType: 'none', padding: 0 }}>
          <li>Email: <a href='mailto:ritamujartgallery@gmail.com'>ritamujartgallery@gmail.com</a></li>
        </ul>
        <div className='footer-social-icon'>
          <a href='mailto:ritamujartgallery@gmail.com' aria-label='Email'>
            <MailOutlineIcon />
          </a>
          <a href='https://wa.me/1234567890' target='_blank' rel='noopener noreferrer' aria-label='WhatsApp'>
            <WhatsAppIcon />
          </a>
          <a href='https://www.instagram.com/yourgallery/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
};



// import React, { useState } from 'react'
// // import shoppingIcon from '../Images/art_studio.png'
// import ColorLensIcon  from '@mui/icons-material/ColorLensOutlined';
// import './Header.css'
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import InstagramIcon from '@mui/icons-material/Instagram';
// export const Header = () => {

//   const [input, setInput] = useState('');

//   const inputHandler = (event)=>{
//     setInput(event.target.value);
//   }

//   const searchHandler = async (event)=>{
//     event.preventDefault();
//     console.log("Searching for:", input);
//   }
//   return (
//     <div className='header'>
//         <div className='nav-logo'>
//             {/* <img src={shoppingIcon} alt="" /> */}
//             <ColorLensIcon className='icon-large'></ColorLensIcon>
//             <p>Art Gallery </p>
//         </div>
//         <div className="search">
//           <form onSubmit={searchHandler}>
//             <input onChange={inputHandler} value={input} type="text" placeholder='Search painting' name='search' required/>
//             <button className="submit">Search</button>
//           </form>
//         </div>
//         <div>
//         <ul className="footer-links" style={{ listStyleType: 'none', padding: 0 }}>
//             <li>Email : ritamujartgallery@gmail.com</li>
//         </ul>
//         <div className="footer-social-icon">

//             <div className="footer-icons-container">
//               <MailOutlineIcon></MailOutlineIcon>
//             </div>
//             <div className="footer-icons-container">
//               <WhatsAppIcon></WhatsAppIcon>
//             </div>
//             <div className="footer-icons-container">
//               <InstagramIcon></InstagramIcon>
//             </div>
//         </div>
//         </div>
//     </div>
//   )
// }
