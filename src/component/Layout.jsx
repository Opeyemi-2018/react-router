// Importing the Outlet component from the 'react-router-dom' library
import { Outlet } from "react-router-dom";
// Importing the Header and Footer components from their respective files
import Header from "./Header";
import Footer from "./Footer";

// Defining the Layout component
function Layout() {
  return (
    <div>
      {/* Rendering the Header component */}
      <Header />
      {/* Rendering the Outlet component */}
      {/* The Outlet component is a placeholder where child route components will be rendered */}
      <Outlet />
      {/* Rendering the Footer component */}
      <Footer />
    </div>
  );
}

// Exporting the Layout component as default
export default Layout;
