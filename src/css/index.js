import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'adigiana';
      src: url('../../public/fonts/Adigiana.ttf');
    }

    @font-face {
      font-family: 'pressStart';
      src: url('../../public/fonts/pressStart2P.ttf');
    }

    body { 
        font-family: 'adigiana', sans-serif;

        background-color: #000;
    }

    html, body, #root {
      height: 100%;
    }

    @keyframes floating {
      from { transform: translate(0,  0px); }
      65%  { transform: translate(0, 5px); }
      to   { transform: translate(0, -0px); }
    }
`;

const Floating = styled.div`
    animation-name: floating;
    animation-duration: ${({ time }) => time ? time : '5s'};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`

const BackgroundImage = styled.div`
  background-image: url(public/img/${(props) => props.url});
  background-size: cover;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
`

export { StyledLink, GlobalStyle, BackgroundImage, Floating };
