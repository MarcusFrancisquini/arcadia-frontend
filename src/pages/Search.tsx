import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getGames, Game } from "../services/api";

import GameCard from "../components/GameCard";

const Search = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);

  const location = useLocation();

  // Capture URL value
  const query = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    async function fetchGames() {
      const gamesList = await getGames();
      setGames(gamesList);
    }
    fetchGames();
  }, []);

  useEffect(() => {
    if (query) {
      const results = games.filter((game) =>
        game.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredGames(results);
    }
  }, [games, query]);

  return (
    <div className="home-page-container">
      {filteredGames.length > 0 ? (
        filteredGames.map((game) => <GameCard key={game._id} game={game} />)
      ) : (
        <p className="search-page-not-found">Nenhum jogo encontrado...</p>
      )}
    </div>
  );
};

export default Search;
