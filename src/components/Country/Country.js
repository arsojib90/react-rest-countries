import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.country);
    const {name,population,area,region,flags}=props.country
    return (
        <div className='country'>
            <h3>Country Name :{name.common}</h3>
            <img src={flags.png} alt="" srcset="" />
            <h4>Population :{population}</h4>
            <p>Area :{area}km</p>
            <p>Region :{region}</p>
        </div>
    );
};

export default Country;