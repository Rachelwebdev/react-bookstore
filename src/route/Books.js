import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

function Books() {
  const books = useSelector((state) => state.books.books);

  return (
    <>
      <div>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      </div>
      <Form />
    </>
  );
}

export default Books;
