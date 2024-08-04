import { Outlet } from "react-router-dom"

Outlet
function Dashboard() {
  return (
    <div>
      <h1>this is the Dashboard page</h1>
      <Outlet/>
    </div>
  )
}

export default Dashboard
