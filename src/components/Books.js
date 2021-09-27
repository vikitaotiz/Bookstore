import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import SingleBook from './SingleBook';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h1>Books List</h1>
      <ul>
        {books.length > 0 ? books.map((book) => <SingleBook key={book.id} book={book} />) : 'No Books'}
      </ul>
      <hr />
      <AddBook />
    </div>
  );
};

export default Books;
