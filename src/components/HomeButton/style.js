import styled from "styled-components";

const Text = styled.p`
  background-color: rgba(176,124,120,1);

  border-radius: 100%;

  padding: 65px 50px;

  font-size: 25px;
  color: #000;

  cursor: pointer;
`;

const Floating = styled.button`
    animation-name: floating;
    animation-duration: ${({ time }) => time ? time : '5s'};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    position: absolute;
    bottom: 0;
    left: 0;

    margin: 30px;
`

export { Text, Floating };
