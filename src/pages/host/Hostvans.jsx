
import data from "../../data";
import { useState } from "react";
import { Link } from "react-router-dom";

function Hostvans() {
  let [hostVans, setHostVans] = useState(data);

  // Filter vans with hostId 123
  const vansWithHostId123 = hostVans.filter((van) => van.hostId === 123);

  return (
    <div style={{padding: '15px', height: '75vh'}}>
      <div>
        <h1 style={{fontSize: '25px', fontWeight: 'bold', color: '#777'}}>Your listed Vans</h1>
      </div>
      {vansWithHostId123.map((hostVan) => {
        let { id, image, name, price } = hostVan;
        return (
          <div key={id}>
            <Link to={id} >
                <div style={{display: 'flex', alignItems: 'center', background: '#fff',
                 borderRadius: '4px',  boxShadow: '0 2px 4px rgba(0,0,0,0.3)', padding: '10px'}}>
                 <img style={{width: '10%', height: '65px', borderRadius: '3px', objectFit: 'cover'}} src={image} alt={name} />
                  <div style={{padding: '0 20px'}}>
                      <h2>{name}</h2>
                      <p style={{color: '#777'}}>${price}/day</p>
                  </div>
                </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Hostvans;
