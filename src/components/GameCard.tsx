import {
  FaRegBookmark,
  FaBookmark,
  FaWindows,
  FaPlaystation,
  FaXbox,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Game, toggleFavorite } from "../services/api";
import { JSX } from "react";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  // Favorite games
  const [isFavorite, setIsFavorite] = useState(game.isFavorite);

  const handleFavoriteClick = async () => {
    try {
      await toggleFavorite(game._id!, isFavorite);
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Erro ao favoritar:", error);
    }
  };

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
  const uniquePlatforms = Array.from(new Set(game.platforms.map(platformType)));

  // Rating formatting
  const getRating = (rating: number) => {
    if (rating <= 2) return "rating-bad";
    if (rating <= 3.5) return "rating-ok";
    return "rating-good";
  };

  return (
    <>
      <div
        className="game-card"
        style={{ backgroundImage: `url(${game.imageUrl})` }}
      >
        <div className="game-card-overlay" />
        <div className="header-card">
          <div className={`game-rating ${getRating(game.rating)}`}>
            {game.rating.toFixed(1)}
          </div>
          <button onClick={handleFavoriteClick} className="favorite-button">
            {isFavorite ? (
              <FaBookmark size={18} />
            ) : (
              <FaRegBookmark size={18} />
            )}
          </button>
        </div>
        <div className="card-data">
          <div className="game-platforms">
            {uniquePlatforms.map((platform, index) => (
              <span key={index}>{platformIcons[platform]}</span>
            ))}
          </div>
          <h1 className="game-name">{game.name}</h1>
          <p className="game-description">{game.description}</p>
          <Link to="" className="read-more-button">
            <span>Ver detalhes</span>
            <FaArrowRight size={15} className="read-more-button-icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default GameCard;
