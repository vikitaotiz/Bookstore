import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const SingleBook = ({ book }) => {
  const dispatch = useDispatch();
  const { title, id } = book;
  const capitalized = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <li className="list-item">
      <b>{capitalized(title)}</b>
      {' '}
      <button type="button" onClick={() => dispatch(removeBook(id))}>X</button>
      {' '}
    </li>
  );
};

SingleBook.propTypes = {
  book: propTypes.shape({
    title: propTypes.string,
    id: propTypes.number,
  }),
};

SingleBook.defaultProps = {
  book: {},
};

export default SingleBook;
