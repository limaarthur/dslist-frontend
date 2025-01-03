import { CardGame } from "../CardGame";
import { CartList, GameListPageContainer } from "./styles";

export function GameListPage() {
  return (
    <GameListPageContainer>
      <h1>Aventura e RPG</h1>
      <CartList>
        <CardGame />
        <CardGame />
      </CartList>
    </GameListPageContainer>
  )
}