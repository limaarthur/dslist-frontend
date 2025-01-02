import styled from "styled-components";

export const ListTypeGameContainer = styled.div`
  padding: 1.2rem;
  margin: 2rem 10rem;
  border-radius: 0.4rem;

  background: var(--color-white);
`;

export const ListTypeContainer = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 1rem 0rem;
  gap: 0.6rem;

  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;

    color: var(--color-blue-medium);
  }
`;