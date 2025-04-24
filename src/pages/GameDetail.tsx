import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGameById, Game } from "../services/api";
import { JSX } from "react";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";

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

  // Normalize platform names
  const platformType = (platform: string) => {
    if (platform.toLowerCase().includes("playstation")) return "PlayStation";
    if (platform.toLowerCase().includes("xbox")) return "Xbox";
    if (platform.toLowerCase().includes("pc")) return "PC";
    return platform;
  };

  // Platform icons
  const platformIcons: Record<string, JSX.Element> = {
    PC: <FaWindows size={18} />,
    Xbox: <FaXbox size={18} />,
    PlayStation: <FaPlaystation size={18} />,
  };

  // Unique platforms (no duplicates)
  const uniquePlatforms = Array.from(
    new Set(game?.platforms.map(platformType))
  );

  return (
    <>
      <div className="game-detail-container">
        <div
          className="game-detail-image"
          style={{ backgroundImage: `url(${game?.imageUrl})` }}
        ></div>
        <div className="game-dt-left-container">
          <h1 className="game-dt-title">{game?.name}</h1>
          <div className="game-dt-desc-container">
            <span className="game-dt-desc-span">Sobre</span>
            <p className="game-dt-desc">{game?.description}</p>
          </div>
          <div className="game-dt-platform-container">
            <span className="game-dt-subtitle">Plataformas</span>
            <div className="game-dt-platforms-container">
              {uniquePlatforms.map((platform, index) => (
                <span className="game-dt-platforms" key={index}>
                  {platformIcons[platform]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetail;
