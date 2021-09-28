import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar navbar-expand-lg navbar-light bg-white mb-5 my-0">
    <div className="container-fluid">
      <a className="navbar-brand primary-color fw-bold" href="/">Bookstore CMS</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>Books</NavLink>
        </li>
        <li><NavLink className="nav-link" to="/categories" exact>Categories</NavLink></li>
      </ul>
    </div>
  </div>
);

export default Navbar;
