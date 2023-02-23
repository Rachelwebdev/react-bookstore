import React from 'react';
import Book from './Book';
import Form from './Form';

function Books() {
  return (
    <>
      <ul>
        <Book />
        <Book />
        <Book />
        <Book />
      </ul>
      <Form />
    </>
  );
}

export default Books;
