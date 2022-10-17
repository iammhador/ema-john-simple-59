import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <h3 className="text-gray-300 text-lg">{user?.email}</h3>
      </div>
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
        <button
          onClick={handleLogout}
          className="py-1 px-2 ml-4 text-white text-lg hover:text-orange-400"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
