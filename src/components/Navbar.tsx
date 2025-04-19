import { BsBookmarkFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          arcadia
        </Link>
        <div className="search-input-container">
          <input type="text" placeholder="Buscar jogos..." />
          <FaSearch className="search-input-icon" />
        </div>
        <Link to="/favorites" className="favorite-games">
          <span>Favoritos</span>
          <BsBookmarkFill />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
