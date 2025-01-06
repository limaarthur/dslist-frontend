import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: var(--color-blue-dark);

  height: 100vh;
`;

export const Logo = styled.div`
  font-weight: bold;
  color: var(--color-white);
  font-size: 1.6rem;
  line-height: 150%;
  padding: 1.4rem;

  span {
    color: var(--color-blue-light);
  }
`;

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 2rem;

  h1 {
    font-size: 1.4rem;
    font-weight: bold;

    color: var(--color-white);
  }

  p {
    font-size: 1rem;
    font-weight: 400;

    color: var(--color-white);
  }

  button {
    padding: 0.8rem 4rem;
    margin-top: 1rem;
    border-radius: 0.4rem;
    background: var(--color-blue-light);

    font-weight: bold;
    font-size: 1rem;
    color: var(--color-white);

    border: none;

    &:hover {
      background: var(--color-blue-medium);
      transition: 0.2s;
    }
  }
`;