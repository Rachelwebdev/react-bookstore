import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import bookList from './booksList';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const key = 'C1TOCRXy2TrdHgmdGVbc';

export const fetchBookData = createAsyncThunk(
  'bookData/fetchBookData',
  async () => {
    const response = await axios.get(`${BASE_URL}${key}/books`);
    return response.data;
  },
);

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      return {
        ...state,
        books: [...state.books, newBook],
      };
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.id !== bookId),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookData.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchBookData.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        books: action.payload,
      }))
      .addCase(fetchBookData.rejected, (state, action) => ({
        ...state,
        status: 'error',
        error: action.error.message,
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
