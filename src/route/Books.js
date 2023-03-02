import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { getBookData } from '../redux/books/booksSlice';

function Books() {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((store) => store.books);

  const status = useSelector((store) => store.books.status);
  const error = useSelector((store) => store.books.error);

  useEffect(() => {
    dispatch(getBookData());
  }, [dispatch]);

  if (status === 'loading') {
    return <h1>Loading...</h1>;
  }

  if (!isLoading && books.length === 0) {
    return <h1>No Books to Display</h1>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
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
      </div>
      <Form />
    </>
  );
}

export default Books;
