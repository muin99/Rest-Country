import React, { useState } from 'react'; // Don't forget to import useState
import "./Country.css";

const Country = ({ country }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    
    const handleVisited = () => {
        setVisited(!visited);
    };

    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt={`${name?.common} flag`} />
            <h3>Population: {population}</h3>
            <h3>Area: {area} km²</h3>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>Visited</button>
            <p>{visited ? 'I have visited this country' : 'I want to visit this country'}</p>
        </div>
    );
};

export default Country;
