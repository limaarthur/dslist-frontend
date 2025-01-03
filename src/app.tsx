import { Header } from "./components/Header";
//import { ListTypeGame } from "./components/ListTypeGame";
import { GameListPage } from "./components/GameListPage";
//import { Game } from "./components/Game";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      {/*<ListTypeGame />*/}
      <GameListPage />
      {/*<Game />*/}
  </>
  )
}