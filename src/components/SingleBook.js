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
        <small><i>{category}</i></small>
        <div className="fw-bold primary-color">
          <i className="fas fa-book mr-3" />
          {' '}
          {capitalized(title)}
        </div>
        <button type="button" className="btn btn-sm btn-link text-decoration-none error" onClick={() => dispatch(removeBook(id))}>
          <span className="error">
            <i className="far fa-trash-alt" />
            {' '}
            Remove Book
          </span>
        </button>
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
