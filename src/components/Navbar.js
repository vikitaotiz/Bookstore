import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="nav">
    <div>
      <h2 className="primary-color">Bookstore</h2>
    </div>
    <div className="flex-right">
      <ul>
        <li><NavLink to="/" exact>Books</NavLink></li>
        <li><NavLink to="/categories" exact>Categories</NavLink></li>
      </ul>
    </div>
  </div>
);

export default Navbar;
