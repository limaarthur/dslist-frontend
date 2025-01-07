import { useNavigate } from "react-router";
import { HomeContent, HomePageContainer, Logo } from "./styles";

export function HomePage() {
  const navigate = useNavigate()
  return (
    <HomePageContainer>
      <Logo>DSList <span>PRO</span></Logo>
      <HomeContent>
        <h1>Bem vindo a coleção de jogos</h1>
        <p>Organize sua coleção de games de um jeito prático e divertido.</p>
        <button onClick={() => navigate("lists-type")}>Iniciar</button>
      </HomeContent>
    </HomePageContainer>
  )
}