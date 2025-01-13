import styled from "styled-components";

export const GameCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  background: var(--color-white);
  border-radius: 0.4rem;

  margin: 1.2rem 10rem;

  section {
    display: flex;

    padding: 1rem;

    img {
      max-width: 18rem;
      max-height: 22rem;
      width: 50%;
    }

    div.game-info {
      display: flex;
      flex-direction: column;

      width: 100%;
      padding: 0rem 1rem;

      span {
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 150%;
        color: var(--color-blue-medium);
      }

      h1 {
        font-size: 2rem;
        margin-top: 1rem;
      }

      div.platform-genre-type {
        display: flex;
        flex-direction: column;

        margin-top: 4rem;
        
        p {
          font-size: 1.2rem;
          font-weight: bold;
          color: var(--color-gray-dark);
        }
      }
    }
  }
  
  div.game-description {
    width: 100%;
    height: 100%;

    padding: 0rem 1rem 1rem 1rem;

    font-weight: 500;
    font-size: 1.2rem;
    color: var(--color-gray-dark);
  }
`;