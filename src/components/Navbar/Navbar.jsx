import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
// import shoppingIcon from '../Images/art_studio.png'
import ColorLensIcon  from '@mui/icons-material/ColorLensOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ArtContext } from '../../context/ArtContext';
// import ColorLensIcon from '@mui/icons-material/ColorLens';
export const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const {getTotalCartItems} = useContext(ArtContext);
  return (
    <div className='navbar'>
        <ul className="nav-menu">
            <li onClick={()=> {setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu("painting")}}><Link style={{ textDecoration: 'none' }} to='/painting'>Painting</Link>{menu==="painting"?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu("photography")}}><Link style={{ textDecoration: 'none' }} to='/photography'>Photography</Link>{menu==="photography"?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu("sculpture")}}><Link style={{ textDecoration: 'none' }} to='/sculpture'>Sculpture</Link>{menu==="sculpture"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><ShoppingCartIcon></ShoppingCartIcon></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
export default Navbar
