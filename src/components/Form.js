import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import styles from '../styles/Form.module.css';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = nanoid();
    dispatch(addBook({ id, title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Book title"
          required
          className={styles.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          id="author"
          value={author}
          placeholder="Book author"
          required
          className={styles.author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="submit"
          value="ADD BOOK"
          required
          className={styles.submitBtn}
        />
      </form>
    </>
  );
}

export default Form;
