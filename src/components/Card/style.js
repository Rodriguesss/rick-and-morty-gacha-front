import styled from "styled-components";
import setAnimationTimeInCurrentWay from "../../utils/animation";

const CardWrapper = styled.div`
  position: relative;

  background-image: url(${(props) => props.path});
  background-size: 92%;
  background-repeat: no-repeat;
  background-position: center;

  width: 23%;
  height: 40vh;

  z-index: 3;

  animation-name: floating;
  animation-duration: ${({ id }) => setAnimationTimeInCurrentWay(id)};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`

const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;

  border-radius: 20px;

  z-index: 2;
`

const Title = styled.p`
  position: absolute;
  bottom: 14%;
  left: 15%;

  font-family: 'pressStart', sans-serif;
  font-weight: 300;
  font-size: 10px;
  text-align: left;
  word-wrap: break-word;

  width: 70%;
  
  z-index: 4;
`

export { CardWrapper, Image, Title }