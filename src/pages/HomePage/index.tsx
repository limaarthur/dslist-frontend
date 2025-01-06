import { HomeContent, HomePageContainer, Logo } from "./styles";

export function HomePage() {
  return (
    <HomePageContainer>
      <Logo>DSList <span>PRO</span></Logo>
      <HomeContent>
        <h1>Bem vindo a coleção de jogos</h1>
        <p>Organize sua coleção de games de um jeito prático e divertido.</p>
        <button>Iniciar</button>
      </HomeContent>
    </HomePageContainer>
  )
}