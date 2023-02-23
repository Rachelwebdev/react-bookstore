import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Book.module.css';

function Book({ title, author }) {
  return (
    <>
      <li className={styles.singleBook}>
        <p>{title}</p>
        <p>{author}</p>
        <button type="button">remove</button>
      </li>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
