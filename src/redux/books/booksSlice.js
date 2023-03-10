/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/C1TOCRXy2TrdHgmdGVbc/books';

export const postBook = createAsyncThunk(
  'bookData/postBookData',
  async (bookData, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL, bookData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const getBookData = createAsyncThunk(
  'bookData/getBookData',
  async (_, thunkAPI) => {
    try {
      const response = await axios(BASE_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const deleteBook = createAsyncThunk(
  'bookData/deleteBook',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const initialState = {
  books: [],
  isLoading: false,
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postBook.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(getBookData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBookData.fulfilled, (state, action) => {
        const responseObject = action.payload;
        const newBookArr = Object.keys(responseObject).map((id) => {
          const bookObj = responseObject[id][0];
          bookObj.item_id = id;
          return bookObj;
        });
        state.isLoading = false;
        state.status = 'succeeded';
        state.books = newBookArr;
      })
      .addCase(getBookData.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;
