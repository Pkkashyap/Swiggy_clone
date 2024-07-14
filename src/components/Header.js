import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact,setBtnNameReact] = useState("Login");

  return (
  <div className="header">
    <div className="logo-container">
      <img className="logo" src={LOGO_URL}></img>
    </div>
    <div className="nav-items">
      <ul>
        <li>Online status: {useOnlineStatus()?"😀":"🥺"}</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Abouts Us</Link></li>
        <li><Link to="/contact">Countact Us</Link></li>
        <li>Cart</li>
        <button className="loginbtn" onClick={()=>{
          btnNameReact=="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
        }}>{btnNameReact}</button>
      </ul>
    </div>
  </div>
)};

export default Header;
