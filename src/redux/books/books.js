import { combineReducers } from 'redux';

const saveBookToApi = async (data) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/08Tm1nU2azXx78h1XJOM/books', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(data),
  });
};

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
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  books: booksReducer,
});
