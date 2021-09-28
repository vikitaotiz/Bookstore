import { combineReducers } from 'redux';
import { saveBookToApi, removeBookFromApi } from '../ApiCalls';

// Actions
export const setBooks = (books) => ({
  type: 'SET_BOOKS',
  payload: books,
});

export const addBook = (book) => ({
  type: 'ADD_BOOK',
  payload: book,
});

export const removeBook = (id) => ({
  type: 'REMOVE_BOOK',
  payload: id,
});

// Reducers
export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return state.concat(action.payload);

    case 'ADD_BOOK':
      saveBookToApi(action.payload);
      return [action.payload, ...state];

    case 'REMOVE_BOOK':
      removeBookFromApi(action.payload);
      return state.filter((book) => book.item_id !== action.payload);

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  books: booksReducer,
});
