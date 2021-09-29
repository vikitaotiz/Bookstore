import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const books = useSelector((state) => state.books.length);

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-white mb-5 my-0">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          <span className="primary-color">
            <i className="fas fa-book-reader mr-3" />
            {' '}
            Bookstore CMS
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>Books</NavLink>
            </li>
            <li><NavLink className="nav-link" to="/categories" exact>Categories</NavLink></li>
          </ul>
          <i className="fas fa-user-alt primary-color">
            {' '}
            { books}
          </i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
