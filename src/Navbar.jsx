import React from 'react';







//HUM LINK OR NAVLINK BOTH YSE KR SKTE HA // LInk tag bina page ko reload kare change krat ah page
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
        <Link to='/'> About</Link>
        <Link to='/contact'> Contact </Link>
        <Link> Know me </Link>
   
        </div>
    )
}

export default Navbar
