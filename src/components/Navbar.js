import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navMenu}>
      <ul className={styles.navLinks}>
        <h1 className={styles.logo}>Bookstore CMS</h1>
        <li>
          <Link
            to="/"
            className={styles.linkBooks}
          >
            Books
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
            className={styles.linkCategories}
          >
            Categories
          </Link>
        </li>
      </ul>
      <h3>
        <FaUserCircle className={styles.FaUserCircle} />
      </h3>
    </nav>
  );
}

export default Navbar;
