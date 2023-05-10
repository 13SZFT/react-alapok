import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/faq">Faq</Link>
    </div>
  );
};

export default NavBar;
