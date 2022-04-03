import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navber'>
            <div className='shopName'>
                <h2>TOP SHOP</h2>
            </div>

            <div className='nav-menu'>
            <Link to='home'>Home</Link>
            <Link to='reviews'>Reviews</Link>
            <Link to='dashboard'>Dashboard</Link>
            <Link to='blogs'>Blogs</Link>
            <Link to='abouts'>Abouts</Link>
            </div>
        </div>
    );
};

export default Header;