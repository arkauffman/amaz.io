import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <h1>Welcome</h1>   
            <h4>Check out the catalogue below</h4>
            <Link to="/catalogue" className='NavBar-link'><span className="catalogue">📒</span></Link>
        </div>
    );
}

export default Home;