import React from "react";
import { Link } from "react-router-dom";

const navItems = ["home", "about", "projects", "art", "info", "contact"];

const Nav = ({ page }) => {
  return (
    <div className="nav">
      <ul>
        {navItems.map((item) => (
          <li
            className={page === item ? "nav-item active" : "nav-item"}
            key={item}
          >
            <span className="dot">●</span>
            <Link to={`/${item}`}>
              <span className="nav-link">{item}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
