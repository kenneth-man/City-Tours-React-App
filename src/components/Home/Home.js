import React from 'react';
import './Home.css';
import homeBackground  from '../../res/home-background.mp4';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home home__column'>
            <video src={homeBackground} className='home__video' loop={true} muted={true} autoPlay={true} />

            <div className='home__titles home__column'>
                <h1 className='home__h1'>City-Tours</h1>

                <h2 className='home__h2'>The Home of all things Travel...</h2>

                <NavLink to='/about' exact={true} className='home__btn'>Find out More</NavLink>
            </div>
        </div>
    )
}

export default Home;