import React, { useState } from 'react';
import "./Country.css";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    };

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'white' }}>Name: {name?.common}</h3>
            <img src={flags.png} alt={`${name?.common} flag`} />
            <h3>Population: {population}</h3>
            <h3>Area: {area} km²</h3>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark as visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
            <p>{visited ? 'I have visited this country' : 'I want to visit this country'}</p>
        </div>
    );
};

export default Country;
