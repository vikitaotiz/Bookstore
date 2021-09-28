import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const books = useSelector((state) => state.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const createBook = (e) => {
    e.preventDefault();
    if (title && author) {
      const data = { id: books.length + 1, title, author };
      dispatch(addBook(data));
      setTitle('');
      setAuthor('');
      setError('');
    } else {
      setError('Title and Author is required!');
    }
  };

  return (
    <div className="mt-3">
      <h6>Add New Book</h6>
      <small className="alert-danger">{error}</small>
      <form onSubmit={createBook} className="row p-3">
        <div className="col p-2">
          <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title" />
        </div>
        <div className="col p-2">
          <input className="form-control" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Book Title" />
        </div>
        <div className="col p-2 d-grid">
          <button className="btn btn-primary btn-sm" type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
