// Importing necessary modules and components from 'react-router-dom', 'react-icons', and 'react'
import { Link, useParams, Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import data from "../../data";
import { FaLongArrowAltLeft } from "react-icons/fa";

// Defining the HostvanDetails component
function HostvanDetails() {
  // Style for active NavLink
  let activeStyle = {
    textDecoration: 'underline'
  };

  // Using state to manage host vans data
  let [hostVans, setHostVans] = useState(data);
  
  // Extracting 'id' parameter from URL
  let { id } = useParams();

  // Filtering vans with hostId 123
  const vansWithHostId123 = hostVans.filter((van) => van.hostId === 123);

  // Finding the specific host van with the given 'id'
  let OurHostVans = vansWithHostId123.find((host123) => host123.id === id);

  // Destructuring values from the found host van object
  let { image, name, price, type } = OurHostVans;

  // Rendering JSX for the HostvanDetails component
  return (
    <div style={{ marginTop: '20px', height: '100vh', padding: '15px' }}>
      {/* Link to navigate back to the vans page */}
      <Link to='..' relative="path">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Icon for the back button */}
          <FaLongArrowAltLeft style={{ fontSize: '20px', marginRight: '5px' }}></FaLongArrowAltLeft>
          <p>back to vans</p>
        </div>
      </Link>

      {/* Displaying details of the specific host van */}
      <div style={{ background: '#fff', padding: '20px', borderRadius: '3px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Displaying image, type, name, and price of the host van */}
          <img style={{ width: '20%', height: '130px' }} src={image} alt="" />
          <div style={{ marginLeft: '30px' }}>
            {/* Button displaying the van type */}
            <button style={{ background: 'orangered', width: '100%', padding: '5px', border: 'none', color: '#fff', borderRadius: '3px', fontWeight: 'bold' }}>{type}</button>
            {/* Displaying van name and price */}
            <h2 style={{ padding: '10px 0', fontSize: '30px' }}>{name}</h2>
            <p>{price}</p>
          </div>
        </div>
        
        {/* Navigation links using NavLink for different sections */}
        <nav style={{ margin: '25px 0' }}>
          {/* NavLink for 'Details' section */}
          <NavLink end style={({ isActive }) => isActive ? activeStyle : null} to='.'>Details</NavLink>
          {/* NavLink for 'Pricing' section */}
          <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='pricing'>Pricing</NavLink>
          {/* NavLink for 'Photo' section */}
          <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='photo'>Photo</NavLink>
        </nav>

        {/* Outlet for rendering nested routes */}
        <Outlet context={{ OurHostVans }} />
      </div>
    </div>
  );
}

// Exporting the HostvanDetails component as default
export default HostvanDetails;
