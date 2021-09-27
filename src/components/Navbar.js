import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="nav">
    <div>
      <h1>Bookstore</h1>
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
