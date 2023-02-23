import React from 'react';
import styles from '../styles/Form.module.css';

function Form() {
  return (
    <>
      <form
        action=""
        className={styles.form}
      >
        <input
          type="text"
          placeholder="Book title"
          required
          className={styles.title}
        />
        <input
          type="text"
          placeholder="Book author"
          required
          className={styles.author}
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
