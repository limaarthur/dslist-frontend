import { CardGameContainer } from "./styles";
import img from "../../assets/game.png"

export function CardGame() {
  return (
    <CardGameContainer>
      <img src={img} alt="Capa do jogo Mass Effect" />
      <div className="game-info">
        <h1>Mass Effect Trilogy</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <strong>2012</strong>
      </div>
    </CardGameContainer>
  )
}