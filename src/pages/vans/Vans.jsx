// Importing necessary modules from React and react-router-dom
import React, { useEffect, useState } from 'react';
// Importing Link, useSearchParams, and NavLink from react-router-dom
import { Link, useSearchParams, NavLink } from 'react-router-dom';
// Importing data from an external file (assuming)
import data from '../../data';

// Defining the Vans component
function Vans() {
  // Declaring variables and using React hooks
  let name; // Declaring a variable 'name' (not used in this component)
  console.log(typeof name); // Logging the type of 'name' variable (for debugging)

  // Using useSearchParams to access and update URL search parameters
  let [searchParams, setSearchParams] = useSearchParams();

  // Using useState to manage the state of 'vans' variable initialized with 'data'
  let [vans, setVans] = useState(data);

  // Retrieving the 'type' parameter from URL search params
  let typeFilter = searchParams.get('type');

  // Filtering 'vans' based on the 'type' parameter or displaying all vans if no filter is applied
  let displayVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans;

  // Rendering JSX
  return (
    <div style={{ padding: '15px' }}>
      {/* Title */}
      <h2 style={{ marginBottom: '20px' }}>Explore our van options</h2>

      {/* Buttons for filtering van types */}
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
        <button onClick={() => setSearchParams({ type: 'simple' })}>Simple</button>
        <button onClick={() => setSearchParams({ type: 'luxury' })}>Luxury</button>
        <button onClick={() => setSearchParams({ type: 'rugged' })}>Rogged</button>
        <button onClick={() => setSearchParams({})}>All Vans</button>
      </div>

      {/* Displaying vans */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '30px', rowGap: '40px' }}>
        {displayVans.map((van) => {
          let { id, image, name, type, price, details } = van;
          return (
            <div style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.3)', background: '#fff', borderRadius: '4px', padding: '4px' }} key={id}>
              {/* Linking to VanDetail page with van ID */}
              <Link style={{ textDecoration: 'none' }} to={id}>
                {/* Van information */}
                <img style={{ width: '95%', borderRadius: '5px', height: '200px', objectFit: 'cover' }} src={image} alt={name} />
                <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', justifyContent: 'space-between' }}>
                  <h3 style={{ color: '#333', fontSize: '15px' }}>{name}</h3>
                  <h4 style={{ color: '#333', fontSize: '15px' }}>${price}/Day</h4>
                </div>
                <button style={{ background: '#ee7214', color: '#fff', width: '30%', fontWeight: 'bold', padding: '3px', borderRadius: '2px', border: 'none' }}>{type}</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Exporting the Vans component as default
export default Vans;
