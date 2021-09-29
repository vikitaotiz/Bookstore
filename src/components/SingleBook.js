import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const SingleBook = ({ book }) => {
  const dispatch = useDispatch();
  const { title, item_id: id, category } = book;
  const capitalized = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start mb-3">
      <div className="ms-2 me-auto">
        <small>{category}</small>
        <div className="fw-bold">
          <i className="fas fa-book mr-3" />
          {' '}
          {capitalized(title)}
        </div>
        <button type="button" className="btn btn-sm btn-link" onClick={() => dispatch(removeBook(id))}>Remove Book</button>
      </div>
      <button type="button" className="btn btn-sm btn-primary" disabled>
        <i className="fab fa-pied-piper-alt" />
        {' '}
        Current Chapter
      </button>
    </li>
  );
};

export default SingleBook;
