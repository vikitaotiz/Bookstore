import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/ApiCalls';
import { setBooks } from '../redux/books/books';
import AddBook from './AddBook';
import SingleBook from './SingleBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(async () => {
    const data = await fetchBooks();
    dispatch(setBooks(data));
  }, []);

  return (
    <div>
      <ul className="list-group">
        {books.length > 0 ? books.map((book) => <SingleBook key={book.item_id} book={book} />)
          : 'No Books'}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
