import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import styles from '../styles/Book.module.css';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <li className={styles.singleBook}>
        <p>{title}</p>
        <p>{author}</p>
        <button
          type="button"
          onClick={() => dispatch(removeBook(id))}
        >
          remove
        </button>
      </li>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
