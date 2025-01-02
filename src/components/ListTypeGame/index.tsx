import { ListTypeContainer, ListTypeGameContainer } from "./styles";

export function ListTypeGame() {
  return (  
    <ListTypeGameContainer>
      <h1>Minhas coleções</h1>
      <ListTypeContainer>
        <a href="#">Aventura e RPG</a>
        <a href="#">Jogos de plataforma</a>
      </ListTypeContainer>
    </ListTypeGameContainer>
  )
}