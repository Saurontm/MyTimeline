import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
}
`;

export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

export const Subtitle = styled.h4`
  text-align: center;
  font-weight: 200;
  font-family: "Roboto", sans-serif;
  margin-top: -2em;
`;

export const EventTitle = styled.h3`
  font-family: "Roboto", sans-serif;
`;

export const EventContent = styled.p`
  font-family: "Roboto", sans-serif;
`;
