import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 360 });

  const handleNavLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <nav>
      <Link to="/" className="title">
        ShopKing
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/" onClick={handleNavLinkClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" onClick={handleNavLinkClick}>
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleNavLinkClick}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
