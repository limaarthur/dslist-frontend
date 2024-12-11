import { HomeContainer, Content, HomeImage } from "./styles"

export function Home() {
    return (
        <HomeContainer>
            <Content>
                <h3>DSList PRO</h3>
                <h1>Suas coleções do jeito certo</h1>
                <p>Organize sua coleção de games de um jeito prático e divertido. 
                    Na verdade você vai aprender a criar este aplicativo e elevar seus conhecimentos para o próximo nível.</p>
                <button type="submit">Iniciar</button>
            </Content>
            <HomeImage/>
        </HomeContainer>
    )

}