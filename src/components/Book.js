import React from 'react';
import styles from '../styles/Book.module.css';

function Book() {
  return (
    <>
      <li className={styles.singleBook}>
        <p>title</p>
        <p>author</p>
        <button type="button">remove</button>
      </li>
    </>
  );
}

export default Book;
