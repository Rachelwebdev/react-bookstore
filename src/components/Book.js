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
    <>
      <li className={styles.singleBook}>
        <div className={styles.bookDescription}>
          <p className={styles.category}>ACTION</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.author}>{author}</p>
          <div className={styles.commRemEdit}>
            <p className={styles.comment}>comments</p>
            <button
              className={styles.remove}
              data-id={id}
              type="button"
              onClick={removeHandler}
            >
              remove
            </button>
            <p className={styles.edit}>Edit</p>
          </div>
        </div>
        <div className={styles.completed}>
          <div className={styles.circle} />
          <p className={styles.percentage}>
            64%
            <br />
            Completed
          </p>
        </div>
        <div className={styles.chapters}>
          <p className={styles.heading}>CURRENT CHAPTER</p>
          <p className={styles.chapterNumber}>Chapter 17</p>
          <button
            type="button"
            className={styles.progressBtn}
          >
            UPDATE PROGRESS
          </button>
        </div>
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
