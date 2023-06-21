import React from "react";
import { Link } from "react-router-dom";
import NetflixLogo from "../icons/NetflixLogo";
import Nav from "./nav";
import Nlogo from "../../images/netflix-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div id="logo" className="logo">
        <Link to="/">
          <NetflixLogo />
        </Link>
      </div>
      <Nav />
      <div className="user-profile">
        <div className="user">
          <div className="name">John Parasite</div>
          <div className="image">
            <img src={Nlogo} alt="netflix" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
