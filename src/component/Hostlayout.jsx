import {Link, NavLink, Outlet } from "react-router-dom"

Outlet

function Hostlayout() {
    let activeStyle = {
        fontWeight: 'bolder',
        textDecoration: 'underline',
        color: 'orange'
    }
  return (
    <div style={{padding: '20px'}}>
      <nav>
        <NavLink end style={({isActive}) => isActive? activeStyle : null} to='/host'>Dashboard</NavLink>
        <NavLink style={({isActive}) => isActive? activeStyle : null} to='/host/income'>Income</NavLink>
        <NavLink style={({isActive}) => isActive? activeStyle : null} to='/host/review'>Review</NavLink>
        <NavLink style={({isActive}) => isActive? activeStyle : null} to='/host/vans'>vans</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Hostlayout
