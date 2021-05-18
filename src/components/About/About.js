import React, { useState } from 'react';
import './About.css';

const About = () => {
    const [isFormShown, setFormShown] = useState(false);
    const [isMessageShown, setMessageShown] = useState(false);

    const toggleForm = () => {
        setFormShown(!isFormShown);
    }

    const displayMessage = (e) => {
        e.preventDefault();
        setMessageShown(true);
    }

    return (
        <div className='about about__column'>
            <div className='about__features about__row'>
                <div className='about__features--box about__column'>
                    <h1 className='about__icon'>🌎</h1>

                    <h1 className='about__h1'>Explore the World</h1>

                    <h2 className='about__h2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h2>
                </div>

                <div className='about__features--box about__column'>
                    <h1 className='about__icon'>🧭</h1>

                    <h1 className='about__h1'>Find your way</h1>

                    <h2 className='about__h2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </h2>
                </div>

                <div className='about__features--box about__column'>
                    <h1 className='about__icon'>⛰️</h1>

                    <h1 className='about__h1'>Start an Adventure</h1>

                    <h2 className='about__h2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h2>
                </div>
            </div>

            <button className='about__btn about__center' onClick={toggleForm}>Contact Us</button>

            <form className={isFormShown ? 'about__form about__column about__fadein' : 'about__hidden'} onSubmit={displayMessage}>
                <label className='about__label about__row'>
                    Name:
                    <input type='text' className='about__input'/>
                </label>

                <label className='about__label about__row'>
                    Email Address:
                    <input type='text' className='about__input'/>
                </label>

                <label className='about__label about__row'>
                    Phone Number:
                    <input type='text' className='about__input'/>
                </label>

                <label className='about__label about__row'>
                    Message:
                    <input type='text' className='about__input'/>
                </label>

                <input type='submit' className='about__submit about__center'/>
            </form>

            <div class={isMessageShown ? 'about__message about__center about__fadein' : 'about__hidden'}>
                Thank you for contacting us, we'll get back to you as soon as possible!
            </div>
        </div>
    )
}

export default About;