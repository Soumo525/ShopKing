import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from 'react-router';
export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 360 && 480});
  const navigate = useNavigate();
  const handleNavLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };
  const handleGoCart =() => {
    navigate("/cart")
  }

  return (
    <nav>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <Link to="/" className="title">
        ShopKing
      </Link>
      
      
      
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
      
      <AiOutlineShoppingCart className="cart" color="black" size = "20" onClick={handleGoCart}/>

      
      
    </nav>
  );
};
