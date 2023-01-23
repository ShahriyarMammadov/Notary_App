import React from "react";
import "./index.scss";
import { NavLink, Link } from "react-router-dom";

const HeaderComp = () => {
  return (
    <header>
      <div className="logo">
        <Link to={"/"}>Notary</Link>
      </div>

      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/wishList"}>Practise Areas</NavLink>
        <NavLink to={"dsadg"}>Testimonials</NavLink>
        <NavLink to={"/sadfsaf"}>About</NavLink>
        <NavLink to={"/addUser"}>Contact</NavLink>
      </nav>
    </header>
  );
};

export default HeaderComp;
