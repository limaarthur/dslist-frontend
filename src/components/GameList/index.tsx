import { GameListContainer } from "./styles";
import img from "../../assets/game.png"
import { Link } from "react-router";

export function GameList() {
  return (
    <GameListContainer>
      <h1>Aventura e RPG</h1>
      <div className="game-lists">
        <img src={img} alt="Capa do jogo Mass Effect" />
        <div className="game-info">
          <Link to="/game-card" className="link-game-card">Mass Effect Trilogy</Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <strong>2012</strong>
        </div>
      </div>
    </GameListContainer>
  )
}