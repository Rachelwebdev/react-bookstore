import React from 'react';
import Book from '../components/Book';
import Form from '../components/Form';

function Books() {
  return (
    <>
      <ul>
        <Book
          title="Psychology of Money"
          author="Morgan Housel"
        />
        <Book
          title="The Silent Patient"
          author="Alex Michael"
        />
        <Book
          title="The Great Gatsby"
          author="Scott Fitzgerald"
        />
        <Book
          title="The Hunger Games"
          author="Suzanne Collins"
        />
      </ul>
      <Form />
    </>
  );
}

export default Books;
