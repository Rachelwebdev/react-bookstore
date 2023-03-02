import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { getBookData } from '../redux/books/booksSlice';

function Books() {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getBookData());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (books.length === 0) {
    return (
      <>
        <h1>No Books to Display</h1>
        <Form />
      </>
    );
  }

  return (
    <>
      <div>
        {books.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            id={book.item_id}
          />
        ))}
        <Form />
      </div>
    </>
  );
}

export default Books;
