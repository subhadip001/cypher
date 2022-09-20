import { useState } from "react";
import "./App.css";
import { NavLink, Router } from "react-router-dom";
import { useEffect } from "react";

function Header() {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(() => {
      return !menu;
    });
    console.log(menu);
  };

  return (
    <>
      <header>
        <div className="header">
          <div>
            <h1>CYPHER</h1>
          </div>
          <div className="navlinks">
            <NavLink>Get Cypher</NavLink>

            <NavLink>Get Cypher</NavLink>

            <NavLink>Get Cypher</NavLink>

            <NavLink>Get Cypher</NavLink>
          </div>
          <div className="menu" onClick={handleChange}>
            <i className="fi fi-br-menu-burger"></i>
          </div>
        </div>
      </header>
      {menu === true && (
        <div className="navdown">
          <div className="navdownlinks">
            <NavLink to="">Get Cypher</NavLink>
            <NavLink to="">Developers</NavLink>
            <NavLink to="">Blog</NavLink>
            <NavLink to="">Contact</NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
