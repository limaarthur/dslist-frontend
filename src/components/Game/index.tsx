import { GameContainer } from "./styles";
import img from "../../assets/game.png"

export function Game() {
  return (
    <GameContainer>
      <section>
        <img src={img} alt="Capa do jogo Mass Effect" />
        <div className="game-info">
          <span>2012</span>
          <h1>Mass Effect Trilogy</h1>
          <div className="platform-genre-type">
            <span>
              Genre: <p>Role-playng(RPG), Adventure</p> 
            </span>
            <span>
              Platform: <p>Xbox, Playstation, PC</p> 
            </span>
            <span>
              Score: <p>4.7</p>
            </span>
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
    </GameContainer>
  )
}