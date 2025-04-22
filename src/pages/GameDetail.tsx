import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGameById, Game } from "../services/api";

const GameDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    async function fetchGame() {
      const gameData = await getGameById(id as string);
      setGame(gameData);
    }
    fetchGame();
  }, [id]);

  return (
    <>
      <div className="blackout"></div>
      <div className="game-detail-container">
        <div
          className="game-detail-image"
          style={{ backgroundImage: `url(${game?.imageUrl})` }}
        ></div>
      </div>
    </>
  );
};

export default GameDetail;
