import React from 'react'
import './Footer.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-line">
            <p>Connect With Us</p>
        </div>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
              <MailOutlineIcon></MailOutlineIcon>
            </div>
            <div className="footer-icons-container">
              <WhatsAppIcon></WhatsAppIcon>
            </div>
            <div className="footer-icons-container">
              <InstagramIcon></InstagramIcon>
            </div>
        </div>
        <ul className="footer-links" style={{ listStyleType: 'none', padding: 0 }}>
            <li>Email : ritamujartgallery@gmail.com</li>
            <li>Tel +917658937421</li>
        </ul>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2025 - All Right Reserved</p>
        </div>

    </div>
  )
}
