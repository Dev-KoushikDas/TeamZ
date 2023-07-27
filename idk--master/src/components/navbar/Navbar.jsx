import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://teamz.onrender.com/api/logout");
    } catch (err) {
      
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">TEAM<span>Z</span></span>
        </Link>
        {user ?
        (
          <div className="navItems">
             {user.username}
            <button className="navButton" onClick={handleLogout}>Logout</button>
          </div>
        )
        
        : (
          <div className="navItems">
            <Link to="/login">
            <button className="navButton">Register</button>
            <button className="navButton" >Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
