import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={Books} />
        <Route path="/categories" exact component={Categories} />
      </div>
    </Router>
  );
}

export default App;
