import React from 'react'
import van from '../images/van.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <img style={{width: '100%', height: '320px'}} src={van} alt="" />
      <div style={{padding: '20px'}}>
        <h1 style={{margin: '10px'}}>Don't squeeze in a seden when you could relax in a van</h1>
        <p style={{margin: '10px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate deleniti 
          impedit ratione non ab ducimus facere, eaque dignissimos vel sed sit totam dolores!
          qui iusto veniam quis asperiores sint! Consequuntur dignissimos vel sed sit totam dolores!</p>
          <div style={{background: 'orangered', borderRadius: '5px', color: '#fff', padding: '10px'}}>
            <h2 style={{padding: '15px', width: '70%'}}>Your destination is waiting Your van is ready</h2>
            <Link style={{padding: '5px', textDecoration:'none', fontSize: '13px', borderRadius: '5px',
             background: '#000', color: '#fff'}} to='/vans'>Explore our vans</Link>
          </div>
      </div>
      
    </div>
  )
}

export default About
