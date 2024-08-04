import React from 'react';
import { Link } from 'react-router-dom';
import van from '../images/van2.jpg';

function Home() {
  const divStyle = {
    backgroundImage: `url(${van})`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '510px',
    objectFit: 'cover',
    position: 'relative'
  };

  return (
    <div style={divStyle}>
      <div style={{position: 'absolute', top: '50%',padding: '20px', width: '90%', color: '#fff',
       left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1 style={{padding: '20px 0px',}}>You got the travel plans, we got the travel vans</h1>
        <p style={{padding: '20px 0px',}}>
          Add adventure to your life by joining the #vanlife move and make your
          perfect road trip.
        </p>
         <Link style={{background: 'orangered', width: '100%', display: 'block', textAlign: 'center',
          color: '#fff', textDecoration: 'none', padding: '5px', borderRadius: '3px', fontWeight: 'bold' 
            }} to='vans'>Find your van</Link>
      </div>
    </div>
  );
}

export default Home;
