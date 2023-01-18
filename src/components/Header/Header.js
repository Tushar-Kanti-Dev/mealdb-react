import React from 'react';
import imagePath from '../../constants/imagePath';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <img  src={imagePath.logo} alt="" />
            <div className='header-title'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About</a>
                <a href="/login">Log-In</a>
            </div>
        </div>
    );
};

export default Header;