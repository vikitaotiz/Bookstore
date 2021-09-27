import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <ul>
      <li><Link to="/">Books</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
  </div>
);

export default Navbar;
