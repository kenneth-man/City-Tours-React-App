import React from 'react';
import './Navbar.css';
import logo from '../../res/logo192.png';
import { NavLink } from 'react-router-dom';

//don't use <a> tags for client-side routing, because after clicking it resets page state (on prev page/s)
//use <NavLink> or <Link> from react-router-dom; <NavLink> allows active styling on the current link page
const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt='react logo' className='navbar__logo'/>

            <NavLink to='/' exact={true} activeClassName="navbar__link-selected" className='navbar__link'>Home</NavLink>

            <NavLink to='/about' exact={true} activeClassName="navbar__link-selected" className='navbar__link'>About</NavLink>

            <NavLink to='/tours' exact={true} activeClassName="navbar__link-selected" className='navbar__link'>Tours</NavLink>
        </nav>
    )
}

export default Navbar;