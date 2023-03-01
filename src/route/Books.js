import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

function Books() {
  const books = useSelector((state) => state.books.books);

  console.log(books);

  return (
    <>
      <div>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
      <Form />
    </>
  );
}

export default Books;
