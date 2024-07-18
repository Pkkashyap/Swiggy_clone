import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const { loggedUser } = useContext(userContext);

  return (
    <div className="flex justify-between items-center border-solid border-black border-2">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL}></img>
      </div>
      <div className="nav-items ">
        <ul className="flex items-center">
          <li className="p-10 mx-4">
            Online status: {useOnlineStatus() ? "😀" : "🥺"}
          </li>
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/about">Abouts Us</Link>
          </li>
          <li className="mx-4">
            <Link to="/contact">Countact Us</Link>
          </li>
          <li className="mx-4">Cart</li>
          <button
            className="mx-5"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li>{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
