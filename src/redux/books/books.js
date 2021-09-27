import { combineReducers } from 'redux';

// Actions
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
    case 'ADD_BOOK':
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
