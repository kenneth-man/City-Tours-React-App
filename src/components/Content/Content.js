import React, { useContext } from 'react';
import { ContentContext } from '../../contexts/ContentContext.js';
import Tour from '../Tour/Tour.js';
import './Content.css';

const Content = () => {
    //context is used when mulitple components share the same state context data
    const { tourInfo } = useContext(ContentContext);

    return (
        <div className='content'>
            {
                //have to use .map() to return an array of components that is then rendered
                tourInfo.map(curr => 
                    <Tour 
                        key={curr.id} 
                        id={curr.id}
                        name={curr.name} 
                        tourName={curr.tourName}
                        desc={curr.desc}
                    />
                )
            }
        </div>
    )
}

export default Content;