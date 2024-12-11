import styled from "styled-components";

import homeBackgroundImg from '../../assets/home-background.svg';

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;

    height: 100vh;

    background-color: var(--color-blue-dark);
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    margin: 120px 40px;

    max-width: 640px;
    padding: 88px 0;

    h3 {
        font-size: 22px;
        font-weight: bold;
        color: var(--color-blue-light);
        margin: 0px 0px 8px 0;
    }

    h1 {
        font-size: 44px;
        font-weight: bold;
        color: white;
        margin: 0px 0px 42px 0;
    }

    p {
        width: 100%;
        font-size: 22px;
        font-weight: bold;
        color: white;
        margin-top: 22px;
    }

    button {
        width: 100%;
        height: 62px;
        border: 0;
        font-size: 22px;
        font-weight: bold;
        margin-top: 172px;
        cursor: pointer;
        background-color: var(--color-blue-light);
        border-radius: 6px;
        &:hover {
            background: var(--color-gray-dark);
            transition: background-color 0.2s;
      }
    }
`;

export const HomeImage = styled.div`
    flex: 1;
    background: url(${homeBackgroundImg}) no-repeat center;
    background-color: var(--color-blue-dark);
    background-size: cover;
    max-width: 640px;
    margin: 120px 40px;
`;