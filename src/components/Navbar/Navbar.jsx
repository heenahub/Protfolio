import React, { useState } from "react";

import styles from "./Navbar.module.css";
//import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        H e e n a
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? "/wrong.png" : "/logos.png"}

          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>


          <li>
            <a href="#skills">Skills</a>
          </li>

         
          

          <li>
            <a href="#Ser">Services</a>
          </li>
          
          
          <li>
            <a href="#proj">Projects</a>
          </li>
          
          <li>
            <a href="#cont">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};