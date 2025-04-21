import { useEffect, useState } from "react";
import { getGames, Game } from "../services/api";

import FavoriteGameCard from "../components/FavoriteGameCard";

const Favorites = () => {
  // Get favorite games
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function fetchGames() {
      const gamesList = await getGames();
      setGames(gamesList);
    }
    fetchGames();
  }, []);

  const favoriteGames = games.filter((game) => game.isFavorite);

  // Favorite games counter
  const favoriteGamesCounter = favoriteGames.length;

  return (
    <div className="favorite-page-container">
      <h2>
        <div className="title-text">
          my favorite games<span>( {favoriteGamesCounter} )</span>
        </div>
      </h2>
      <div className="favorite-games-container">
        {favoriteGames.map((game) => (
          <FavoriteGameCard key={game._id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
