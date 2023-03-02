import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { booksActions, deleteBook } from '../redux/books/booksSlice';
import styles from '../styles/Book.module.css';

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const removeHandler = (event) => {
    const { id } = event.target.dataset;
    dispatch(booksActions.removeBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <li className={styles.singleBook}>
      <p>{title}</p>
      <p>{author}</p>
      <button
        data-id={id}
        type="button"
        onClick={removeHandler}
      >
        remove
      </button>
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
