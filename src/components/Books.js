import { useSelector, useDispatch } from 'react-redux';
import * as booksActions from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const { addBook } = booksActions;

  return (
    <div>
      <h1>
        Bookstore
        {books}
      </h1>
      <button type="button" onClick={() => dispatch(addBook())}>+</button>
    </div>
  );
};

export default Books;
