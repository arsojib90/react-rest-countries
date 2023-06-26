import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = (props) => {

    const [countries,setcountries]=useState([])
  
   useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setcountries(data))
  },[])
  return(
    
    <div >
      <h1>Visiting countries</h1>
      {
        countries.map(country=>console.log(country))
      }
      <div className='countries-container'>

        {
          countries.map(country=><Country 
              country={country}
              key={country.cca3}
              ></Country>)
        }

      </div>
      
    </div>
  )



   
};

export default Countries;