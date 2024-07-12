import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="main-nav">
        <div className="nav-container">
          <h2>Formulo</h2>
          <div className="links-container">
            <Link to='/' className="nav-links">Home Page</Link>
            <Link className="nav-links">Main Dummy</Link>
            <Link className="nav-links">About Us</Link>
          </div>
          <div className="buttons-container">
            <Link to='/signin' className="nav-btn nav-btn-book">Sign In</Link>
            <Link to='/signup' className="nav-btn nav-btn-test">Sign Up</Link>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
