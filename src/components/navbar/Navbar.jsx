import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar container">
      <h2>Posts</h2>
      <input type={"search"} placeholder={"Search..."} id={"search"} />
    </header>
  );
};

export default Navbar;