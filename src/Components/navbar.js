import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className='nav-links'>
            <Link to='/'>
                <button className='nav-link'>
                    Home
                </button>
            </Link>
            <Link to='/randomizer'>
                <button className='nav-link'>
                    Randomizer
                </button>
            </Link>
            </div>
        </div>
    )
}

export default Navbar