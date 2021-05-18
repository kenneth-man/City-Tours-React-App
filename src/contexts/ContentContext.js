import React, { createContext, useState } from 'react';

export const ContentContext = createContext();

const ContentContextProvider = ({ children }) => {
    const [tourInfo, setTourInfo] = useState([
        {
            id: 0,
            name: 'London',
            tourName: 'London Royal Palace Tour',
            desc: 'Buckingham Palace is only open to visitors during the summer, but the other palaces, castles and venues below can be visited year round. To save money, book your royal attraction tickets in advance or buy a London Pass (which includes access to many of the venues).'
        },
        {
            id: 1,
            name: 'Berlin',
            tourName: 'Berlin Brandenburg Gate Tour',
            desc: 'Berlin\'s most famous historic landmark is the Brandenburg Gate (Brandenburger Tor), once a symbol of a divided nation and now a symbol of unity and peace.'
        },
        {
            id: 2,
            name: 'Paris',
            tourName: 'Paris Lights Tour',
            desc: 'After the sun sets on the City of Love, Paris transforms into the City of Lights. Discover the top attractions of the French capital at night on a 2-hour evening walking tour. After the hordes of tourists have thinned, follow your guide to the Eiffel Tower, Arc de Triomphe, Grand Palais, and more'
        },
        {
            id: 3,
            name: 'Madrid',
            tourName: 'Madrid Prado Museum Tour',
            desc: 'A truly world-class museum, the Prado Museum has a collection of more than 8,000 paintings and 700 sculptures. Among its extensive assortment of artworks are many masterpieces'
        },
        {
            id: 4,
            name: 'Hong Kong',
            tourName: 'Hong Kong Disneyland Resort',
            desc: 'Hong Kong Disneyland is located on Lantau Island. Here, you\'ll find a wonderful world filled with fun and fantasy populated with the cast and characters from Disney movies.'
        },
        {
            id: 5,
            name: 'Beijing',
            tourName: 'Beijing Forbidden City',
            desc: 'China\'s largest and most important building, the Forbidden City (Zǐjìnchéng) - also known as the Imperial Palace - is situated in the very heart of Beijing and is a must-see when visiting the country. Started during the Yuan Dynasty between 1271-1368, much of the complex seen today was built between 1406 and 1420.'
        },
        {
            id: 6,
            name: 'HaLong',
            tourName: 'Halong Bay',
            desc: 'The karst seascape of Halong Bay is one of the world\'s most spellbinding sea views and is a UNESCO World Heritage Site. Thousands of limestone islands sit within this bay in the Gulf of Tonkin, eroded into jagged pinnacles by wind and water action over millennia.'
        },
        {
            id: 7,
            name: 'Seoul',
            tourName: 'Gyeongbokgung Palace',
            desc: 'Also known as the Northern Palace, the large Gyeongbokgung Palace complex has gone through some incredible turmoil over the years. It was first built in 1395 during the Joseon dynasty, who built five grand palaces around Seoul. The palace has been bombed, destroyed, rebuilt several times, occupied by the Japanese (first in 1592), and only finally restored in 1990.'
        }
    ])

    const removeTour = id => {
        setTourInfo(tourInfo.filter(curr => curr.id !== Number(id)));
    }

    return (
        <ContentContext.Provider value={{tourInfo, removeTour}}>
            {children}
        </ContentContext.Provider>
    )
}

export default ContentContextProvider;