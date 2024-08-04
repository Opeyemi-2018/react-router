import { Link, NavLink } from "react-router-dom"

function Header() {

  return (
    <header style={{
      display: 'flex', alignItems: 'center',
      padding: '20px 10px', justifyContent: 'space-between'
    }}>

      <Link style={{ fontSize: '18px', fontWeight: 'bolder', color: '#555' }} to='/'>#VANLIFE</Link>

      <nav>
        <NavLink className={({ isActive }) => isActive ? "activeStyle" : null} to='/host'>Host</NavLink>

        <NavLink className={({ isActive }) => isActive ? "activeStyle" : null} to='/about'>About</NavLink>

        <NavLink className={({ isActive }) => isActive ? "activeStyle" : null} to='/vans'>Van</NavLink>

        <NavLink className={({ isActive }) => isActive ? "activeStyle" : null} to='/login'>login</NavLink>

      </nav>
    </header>
  )
}

export default Header
