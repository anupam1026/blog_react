import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">The Ninja Blog</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/create" className="new-blog-link">New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar; 