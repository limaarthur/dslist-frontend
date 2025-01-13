import { GameCardContainer } from "./styles";
import img from "../../assets/game.png"

export function GameCard() {
  return (
    <GameCardContainer>
      <section>
        <img src={img} alt="Capa do jogo Mass Effect" />
        <div className="game-info">
          <span>2012</span>
          <h1>Mass Effect Trilogy</h1>
          <div className="platform-genre-type">
            <p>Genre: Role-playng(RPG), Adventure</p>
            <p>Platform: Xbox, Playstation, PC</p>
            <p>Score: 4.7</p>
          </div>
        </div>
      </section>
      <div className="game-description">
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum illum placeat eligendi, quis maiores veniam. 
          Incidunt dolorum, nisi deleniti dicta odit voluptatem nam provident temporibus reprehenderit blanditiis consectetur tenetur. 
          Dignissimos blanditiis quod corporis iste, aliquid perspiciatis architecto quasi tempore ipsam voluptates ea ad distinctio, sapiente qui, amet quidem culpa."
        </p>
      </div>
    </GameCardContainer>
  )
}