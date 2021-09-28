import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const SingleBook = ({ book }) => {
  const dispatch = useDispatch();
  const { title, id, category } = book;

  // console.log('Test', title);
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start mb-3">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>
        <small>{category}</small>
        <br />
        <button type="button" className="btn btn-sm btn-link" onClick={() => dispatch(removeBook(id))}>Remove Book</button>
      </div>
      <button type="button" className="btn btn-sm btn-primary">Current Chapter</button>
    </li>
  );
};

export default SingleBook;
