import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        className="navbar__logo"
        alt="amazon logo"
      />
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
      <div className="navbar__optionBasket">
        <ShoppingBasketIcon />
        <span className="navbar__option2 navbar__basketCount">0</span>
      </div>
    </div>
  );
};

export default Navbar;
