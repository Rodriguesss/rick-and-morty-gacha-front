import styled from "styled-components";

const Image = styled.img`
  padding: 0px;
  border-radius: 10px;
`

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 300;

  margin: 20px 0;
`

const BannerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin: 0 auto;
  width: 75%;

  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`

const Floating = styled.button`
    animation-name: floating;
    animation-duration: ${({ time }) => time ? time : '5s'};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    cursor: pointer;
`

const New = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`

const Box = styled.div``


export { Image, BannerWrapper, Title, Floating, New, Box }