import React from "react";

const NavBar = ({ count }) => {
  console.log("NavBar -- rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        <span>Total count: </span>
        <span className="badge badge-primary badge-pill">{count}</span>
      </span>
    </nav>
  );
};

export default NavBar;
