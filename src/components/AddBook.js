import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const books = useSelector((state) => state.books);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const createBook = (e) => {
    e.preventDefault();
    if (title && category) {
      const data = { item_id: books.length + 1, title, category };
      dispatch(addBook(data));
      setTitle('');
      setCategory('');
      setError('');
    } else {
      setError('Title and Category is required!');
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
          <input className="form-control" type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Book Title" />
        </div>
        <div className="col p-2 d-grid">
          <button className="btn btn-primary btn-sm" type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
