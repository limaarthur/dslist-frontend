import styled from "styled-components";

export const GameContainer = styled.div`
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
      justify-content: space-between;

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
      }

      div.platform-genre-type {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        padding-bottom: 4rem;

        span {
          font-family: 1.6rem;
          font-weight: bold;
        }

        p {
          font-family: 1.6rem;
          font-weight: 500;
          color: var(--color-gray-dark);
        }
      }
    }
  }
  div.game-description {
    //display: flex;
    //align-items: center;
    //justify-content: center;

    width: 100%;
    height: 100%;

    padding: 1rem;

    font-weight: 500;
    font-family: 2rem;
    color: var(--color-gray-dark);
  }
`;