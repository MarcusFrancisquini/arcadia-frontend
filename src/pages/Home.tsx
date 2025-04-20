import { useEffect, useState } from "react";
import { getGames, Game } from "../services/api";

import GameCard from "../components/GameCard";

const Home = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function fetchGames() {
      const gamesList = await getGames();
      setGames(gamesList);
    }
    fetchGames();
  }, []);

  return (
    <div className="home-page-container">
      {games.map((game) => (
        <GameCard key={game._id} game={game} />
      ))}
    </div>
  );
};

export default Home;
