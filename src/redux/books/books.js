import { combineReducers } from 'redux';

// Actions
export const addBook = (book) => ({
  type: 'ADD_BOOK',
  payload: book,
});

export const removeBook = () => ({
  type: 'REMOVE_BOOK',
});

// Reducers
export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [action.payload, ...state];
    case 'REMOVE_BOOK':
      return state - 1;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  books: booksReducer,
});
