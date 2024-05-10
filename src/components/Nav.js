import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";
import { useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link className={styles.navLogo} to="/">
          <img src="/Logo.svg" alt="" />
        </Link>
        {/* Hamburger Button */}
        <div className={styles.buttonContainer}>
          <button
            onClick={toggleMenu}
            className={`${styles.button} ${showMenu && styles.open}`}
          >
            <span className={styles.hamburgerTop}></span>
            <span className={styles.hamburgerMiddle}></span>
            <span className={styles.hamburgerBottom}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          style={{
            transform: showMenu ? "translateX(0)" : "translateX(100%)",
            opacity: showMenu ? 1 : 0,
            transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
          }}
          className={styles.menu}
        >
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/order">Order Online</Link>
          <Link to="/login">Login</Link>
        </div>

        {/* Navigation links */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
