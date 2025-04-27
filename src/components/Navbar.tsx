import { BsBookmarkFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
      setSearch(""); // clear input
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          arcadia
        </Link>
        <form className="search-input-container" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar jogos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="search-input-button">
            <FaSearch className="search-input-icon" />
          </button>
        </form>
        <Link to="/favorites" className="favorite-games">
          <span>Favoritos</span>
          <BsBookmarkFill />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
