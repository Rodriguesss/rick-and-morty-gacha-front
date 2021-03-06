import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import Adigiana from '../assets/fonts/Adigiana.ttf';
import PressStart from '../assets/fonts/pressStart2P.ttf'

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
      src: url(${Adigiana});
    }

    @font-face {
      font-family: 'pressStart';
      src: url(${PressStart});
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

const BackgroundImage = styled.div`
  background-image: url(${(props) => import.meta.env.VITE_URL + props.path});
  background-size: cover;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
`

export { StyledLink, GlobalStyle, BackgroundImage };
