import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './books/books';

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk),
);
