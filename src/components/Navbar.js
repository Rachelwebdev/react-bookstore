import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navMenu}>
      <h1 className={styles.logo}>Bookstore CMS</h1>
      <ul className={styles.navLinks}>
        <li>
          <Link
            to="/"
            className={styles.link}
          >
            Books
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
            className={styles.link}
          >
            Categories
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
