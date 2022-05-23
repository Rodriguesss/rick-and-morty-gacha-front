import styled from "styled-components";

const CharacterSummonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  width: 100%;
  margin: 25px 0;
`

const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  color: rgba(76,207,58,1);
`

const Text = styled.p`
  font-family: 'pressStart', sans-serif;
  font-weight: 300;
  text-align: center;
  color: rgba(76,207,58,1);
  margin-top: 10px;
`

const Gif = styled.img`
  animation-name: floating;
  animation-duration: ${({ time }) => time ? time : '3s'};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`

const Button = styled.button`
  font-family: 'pressStart', sans-serif;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  color: #000;

  padding: 20px;

  background-color: rgba(240,158,16,1);
  border-radius: 30px;

  cursor: pointer;
`

const Box = styled.div``

export { CharacterSummonWrapper, Title, Text, Gif, Box, Button }