import { useOutletContext } from "react-router-dom"



function HostvanInfo() {
    let {OurHostVans} = useOutletContext()
  return (
    <div>
      <h4>Name: <span style={{fontSize: '14px', color: '#333'}}>{OurHostVans.name}</span></h4>
      <h4 style={{padding: '10px 0'}}>type: <span style={{fontSize: '14px', color: '#333'}}>{OurHostVans.type}</span></h4>
      <h4 style={{padding: '10px 0'}}>details: <span style={{fontSize: '14px', color: '#333', lineHeight: '10px'}}>{OurHostVans.details}</span></h4>
      <h4>Visibility: <span style={{fontSize: '14px', color: '#333'}}>public</span></h4>
    </div>
  )
}

export default HostvanInfo
