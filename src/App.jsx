// Importing the useState hook from the 'react' library
// This hook is not used in the code provided, but it allows functional components to manage state
import { useState } from 'react'

// Importing necessary components and pages from respective files
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans/Vans'
import VanDetail from './pages/vans/VanDetail'
import Layout from './component/Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Review from './pages/host/Review'
import Hostvans from './pages/host/Hostvans'
import HostvanDetails from './pages/host/HostvanDetails'
import Hostlayout from './component/Hostlayout'
import HostvanInfo from './pages/host/HostvanInfo'
import HostvanPhoto from './pages/host/HostvanPhoto'
import HostvanPricing from './pages/host/HostvanPricing'
import NotFound from './pages/vans/NotFound'
import Login from './pages/Login'

// Importing a function named 'requireAuth' from './pages/RequireAuth' file
import { requireAuth } from './pages/RequireAuth'

// Defining the main functional component 'App'
function App() {
  return (
    <div>
      {/* Styling for the main container */}
      <div style={{ margin: 'auto', maxWidth: '900px', height: '100vh', padding: '10px 0 0' }}>
        {/* Initializing BrowserRouter for managing routes */}
        <BrowserRouter>
          {/* Defining different routes using the Routes component */}
          <Routes>
            {/* Parent route '/' with a Layout component */}
            <Route path='/' element={<Layout />}>
              {/* Nested routes for different paths */}
              {/* Home page */}
              <Route index element={<Home />} />
              {/* About page */}
              <Route path='about' element={<About />} />
              {/* Login page */}
              <Route path='login' element={<Login />} />
              {/* Vans page */}
              <Route path='vans' element={<Vans />} />
              {/* VanDetail page with dynamic ID */}
              <Route path='vans/:id' element={<VanDetail />} />

              {/* Nested route for 'host' section */}
              <Route path='host' element={<Hostlayout />}>
                {/* Nested routes for 'host' section */}
                {/* Dashboard page requiring authentication */}
                <Route index element={<Dashboard />} loader={async () => await requireAuth()} />
                
                <Route path='income' element={<Income />} />
                
                <Route path='review' element={<Review />} />
                
                <Route path='vans' element={<Hostvans />} />
                {/* HostvanDetails page with nested routes */}
                <Route path='vans/:id' element={<HostvanDetails />}>
                  {/* Default page for HostvanDetails */}
                  <Route index element={<HostvanInfo />} />
                  {/* Pricing page */}
                  <Route path='pricing' element={<HostvanPricing />} />
                  {/* Photo page */}
                  <Route path='photo' element={<HostvanPhoto />} />
                </Route>
              </Route>
              {/* Route for handling 404 errors */}
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

// Exporting the 'App' component as default
export default App
