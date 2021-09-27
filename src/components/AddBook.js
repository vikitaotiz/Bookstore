import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const books = useSelector((state) => state.books);
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const createBook = () => {
    if (title) {
      const data = { title, id: books.length + 1 };
      dispatch(addBook(data));
      setTitle('');
    }
  };

  return (
    <div>
      <form>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title" />
        <button onClick={createBook} type="button">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
