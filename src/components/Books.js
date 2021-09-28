import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBooks } from '../redux/books/books';
import AddBook from './AddBook';
import SingleBook from './SingleBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const fetchBooks = async () => {
    const booksApi = [];
    await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/08Tm1nU2azXx78h1XJOM/books')
      .then((res) => res.json())
      .then((data) => {
        const result = Object.keys(data).map((key) => [Number(key), data[key][0]]);
        result.forEach((val) => {
          const newObj = {
            id: val[0],
            title: val[1].title,
            category: val[1].category,
          };
          booksApi.push(newObj);
        });
        dispatch(setBooks(booksApi));
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

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
