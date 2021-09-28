import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import SingleBook from './SingleBook';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <ul className="list-group">
        {books.length > 0 ? books.map((book) => <SingleBook key={book.id} book={book} />)
          : 'No Books'}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
