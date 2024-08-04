import { Link } from "react-router-dom"



function NotFound() {
  return (
    <div style={{height: '85vh'}}>
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', textAlign: 'center',height: '50vh'}}>
      <h1>Sorry the page you were lookink for was not found!!</h1>
      <Link style={{marginTop: '20px', background: '#000', color: '#fff',
       padding: '5px', borderRadius: '4px'}} to='/' >Return to Home</Link>
     </div>   
   </div>
  )
}

export default NotFound
