import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to="/" className='Logo'>Amazio</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/checkout" className='Cart'><span role="img">🛒</span></Link>
            </nav>
        </div>
    );
}

export default NavBar;