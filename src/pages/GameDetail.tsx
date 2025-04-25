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

  // Release date formatting
  let formattedDate = "";

  if (game?.releaseDate) {
    const releaseDate = new Date(game.releaseDate);
    const month = releaseDate
      .toLocaleString("pt-BR", { month: "short" })
      .replace(".", "");
    const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    formattedDate = `${releaseDate
      .getDate()
      .toString()
      .padStart(2, "0")} ${formattedMonth} ${releaseDate.getFullYear()}`;
  }

  // Rating formatting
  const getRating = (rating: number) => {
    if (rating <= 2) return "rating-bad";
    if (rating <= 3.5) return "rating-ok";
    return "rating-good";
  };

  return (
    <>
      <div className="game-detail-container">
        <div
          className="game-detail-image"
          style={{ backgroundImage: `url(${game?.imageUrl})` }}
        ></div>
        <div className="game-dt-content">
          <h1 className="game-dt-title">{game?.name}</h1>
          <div className="game-dt-information">
            <div className="game-dt-info-content">
              <div className="game-dt-desc-container">
                <span className="game-dt-desc-span">Sobre</span>
                <p className="game-dt-desc">{game?.description}</p>
              </div>
              <div className="game-dt-information-container">
                <span className="game-dt-subtitle">Plataformas</span>
                <div className="game-dt-platforms-container">
                  {uniquePlatforms.map((platform, index) => (
                    <span className="game-dt-platforms" key={index}>
                      {platformIcons[platform]}
                    </span>
                  ))}
                </div>
              </div>
              <div className="game-dt-information-container">
                <span className="game-dt-subtitle">Desenvolvedora</span>
                <p className="game-dt-information-text">{game?.developer}</p>
              </div>
              <div className="game-dt-information-container">
                <span className="game-dt-subtitle">Publicadora</span>
                <p className="game-dt-information-text">{game?.publisher}</p>
              </div>
            </div>
            <div className="game-dt-info-content">
              <div className="game-dt-information-container">
                <span className="game-dt-subtitle">Data de Lançamento</span>
                <p className="game-dt-information-text">{formattedDate}</p>
              </div>
              <div className="game-dt-information-container">
                <span className="game-dt-subtitle">Nota</span>
                {game?.rating !== undefined && (
                  <div className={`game-rating ${getRating(game.rating)}`}>
                    {game?.rating.toFixed(1)}
                  </div>
                )}
              </div>
              <div className="game-dt-information-container">
                <span className="game-dt-subtitle">Gênero</span>
                <p className="game-dt-information-text">
                  {game?.genres?.join(", ")}
                </p>
              </div>
              <div className="game-dt-information-container">
                <span className="game-dt-subtitle">Classificação</span>
                <p className="game-dt-information-text">{game?.ageRating}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetail;
