import styled from "styled-components";

export const CardGameContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 10rem;
  border-radius: 0.5rem;

  background-color: var(--color-white);

  img {
    max-height: 100%;
    width: 8rem;
    border-radius: 0.4rem 0 0 0.4rem;
  }

  div.game-info {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;

    padding: 1.4rem;
    width: 100%;
    height: 100%;

    h1 {
      font-size: 1.4rem;
      line-height: 150%;
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
`;