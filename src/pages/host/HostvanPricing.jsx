import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostvanPricing() {

    let {OurHostVans} = useOutletContext()
  return (
    <div>
      <h2>${OurHostVans.price}<span style={{fontSize: '16px'}}>/day</span></h2>
    </div>
  )
}

export default HostvanPricing
