import { useOutletContext } from "react-router-dom"



function HostvanPhoto() {

    let {OurHostVans} = useOutletContext()
  return (
    <div>
      <img style={{width: '20%'}} src={OurHostVans.image} alt="" />
    </div>
  )
}

export default HostvanPhoto
