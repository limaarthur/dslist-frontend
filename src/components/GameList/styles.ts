import styled from "styled-components";

export const GameListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 1.2rem 10rem;

  .game-lists {
  display: flex;
  justify-content: center;

  border-radius: 0.5rem;
  margin-top: 1.5rem;

  background-color: var(--color-white);

  img {
    max-height: 100%;
    width: 8rem;
    border-radius: 0.4rem 0 0 0.4rem;
  }
  .game-info {
    display: flex;
    flex-direction: column;

    padding: 1.4rem;
    width: 100%;
    height: 100%;

    .link-game-card {
      font-size: 1.4rem;
      font-weight: bold;
      color: black;
      line-height: 150%;
      text-decoration: none;
    }

    p {
      font-weight: 500;
      color: var(--color-gray-dark);
      line-height: normal;
    }

    strong {
      font-size: 1.2rem;
      color: var(--color-blue-medium);
    }
  }
 }
`;