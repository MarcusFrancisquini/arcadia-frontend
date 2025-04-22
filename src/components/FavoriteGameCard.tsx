import { Game } from "../services/api";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

const FavoriteGameCard = ({ game }: GameCardProps) => {
  return (
    <Link to={`/games/${game._id}`}>
      <figure className="favorite-game-card">
        <img src={game.imageUrl} alt="game-cover" />
        <figcaption>{game.name}</figcaption>
      </figure>
    </Link>
  );
};

export default FavoriteGameCard;
