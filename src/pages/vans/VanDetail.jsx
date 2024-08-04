// Importing necessary modules and components from React and react-router-dom
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../../data'; // Importing data from an external file containing van information
import { FaLongArrowAltLeft } from "react-icons/fa"; // Importing the 'FaLongArrowAltLeft' icon

// Defining the VanDetail component
function VanDetail() {
    // Initializing state for 'infos' using the 'useState' hook, setting it with van data from 'data'
    let [infos, setInfo] = useState(data);

    // Accessing parameters from the URL using 'useParams' from 'react-router-dom'
    let { id } = useParams();

    // Finding the specific van details based on the 'id' parameter from 'infos' array
    let product = infos.find((info) => info.id === id);
        
    // Destructuring values from 'product' object
    let { image, name, price, type, details } = product;

    // Rendering JSX for the VanDetail component
    return (
        <div>
            {/* Link to navigate back to the Vans page */}
            <Link to='..' relative='path'>
                {/* Styling for the back button with an arrow icon and text */}
                <div style={{ display: 'flex', alignItems: 'center', padding: '10px 20px 0px' }}>
                    <FaLongArrowAltLeft style={{ marginRight: '10px' }}> </FaLongArrowAltLeft>
                    <p>Back to Vans</p>
                </div>
            </Link>

            {/* Container for displaying van details */}
            <div style={{ margin: '10px auto', background: '#fff', boxShadow: '0px 4px 4px rgba(0,0,0,0.3)', padding: '10px 20px' }}>
                {/* Displaying van image */}
                <img style={{ width: '100%', objectFit: 'cover', height: '350px' }} src={image} alt={name} />

                {/* Displaying van name and price */}
                <div style={{ display: 'flex', margin: '10px 0', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>{name}</h3>
                    <h4>${price}/Day</h4>
                </div>

                {/* Button displaying van type */}
                <button style={{ width: '30%', padding: '2px', border: 'none', borderRadius: '3px', marginBottom: '5px', background: '#ee7214', color: '#fff', fontWeight: 'bold' }}>{type}</button>

                {/* Displaying van details */}
                <p style={{ padding: '5px 0' }}>{details}</p>

                {/* Button to simulate renting the van */}
                <button style={{ width: '100%', padding: '4px', background: '#113943', color: '#fff', border: 'none', borderRadius: '3px', fontWeight: 'bold' }}>rent this van</button>
            </div>
        </div>
    );
}

// Exporting the VanDetail component as default
export default VanDetail;
