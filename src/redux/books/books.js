import { combineReducers } from 'redux';

// Actions
export const addBook = () => ({
  type: 'ADD_BOOK',
});

export const removeBook = () => ({
  type: 'REMOVE_BOOK',
});

// Reducers
export const booksReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return state + 1;
    case 'REMOVE_BOOK':
      return state - 1;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  books: booksReducer,
});
