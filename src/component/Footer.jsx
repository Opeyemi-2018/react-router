import React from 'react'

function Footer() {
  return (
    <div>
      <footer style={{background: '#555', padding: '10px', maxWidth: '900px', margin: 'auto'}}>
        <p style={{color: '#fff', textAlign: 'center'}}>&copy; {new Date().getFullYear()} #VANLIFE</p>
      </footer>
    </div>
  )
}

export default Footer
