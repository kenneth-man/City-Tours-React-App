import React, { useState, useContext } from 'react';
import { ContentContext } from '../../contexts/ContentContext.js';
import { urls } from '../../imageUrls.js';
import './Tour.css';

const Tour = ({ id, name, tourName, desc }) => {
    const [isDescShown, setIsDescShown] = useState(false);

    const { removeTour } = useContext(ContentContext);

    const toggleDesc = () => {
        setIsDescShown(!isDescShown);
    }

    const handleRemoveTodo = (e) => {
        removeTour(e.target.id);
    }

    return (
        <div className='tour tour__column'>
            <div style={{ backgroundImage: `url(${urls[id]})`, backgroundSize: 'cover'}} className='tour__img'>
                <button className='tour__btn tour__btn-delete' id={id} onClick={handleRemoveTodo}>✖️</button>
            </div>

            <div className='tour__text tour__column'>
                <h1 className='tour__h1'>{name}</h1>

                <h2 className='tour__h2'>{tourName}</h2>

                <div className='tour__btn-row'>
                    <h3 className='tour__h3'>Info</h3>

                    <button className='tour__btn' onClick={toggleDesc}>🎫</button>
                </div>
            </div>

            <p className={isDescShown ? 'tour__p' : 'tour__hidden'}>
                {desc}
            </p>
        </div>
    )
}       

export default Tour;