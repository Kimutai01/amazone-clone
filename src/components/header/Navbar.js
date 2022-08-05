import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Navbar.css";
import { useStateValue } from "../../StateProvider";

const Navbar = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="navbar">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="navbar__logo"
          alt="amazon logo"
        />
      </Link>
      <div className="navbar__search">
        <input type="text" className="navbar__searchInput" />
        <SearchIcon className="navbar__searchIcon" />
      </div>
      <div className="navbar__nav">
        <div className="navbar__option">
          <span className="navbar__option1">Hello Guest</span>
          <span className="navbar__option2">Sign in</span>
        </div>
        <div className="navbar__option">
          <span className="navbar__option1">Returns</span>
          <span className="navbar__option2">& orders</span>
        </div>
        <div className="navbar__option">
          <span className="navbar__option1">Your</span>
          <span className="navbar__option2">Prime</span>
        </div>
      </div>
      <Link className="link" to="/checkout">
        <div className="navbar__optionBasket">
          <ShoppingBasketIcon />
          <span className="navbar__option2 navbar__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
