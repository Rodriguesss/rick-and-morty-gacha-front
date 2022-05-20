import styled from "styled-components";

const CharacterBoardWrapper = styled.div`
  background-color: rgba(127,47,177,0.8);

  padding: 40px;
  margin-top: 20px;

  height: 100%;
  width: 35%;
`

const Title = styled.h1`
  transform: translateY(-60px);

  font-weight: 300;
  font-size: 35px;
  color: #fff;

  text-align: center;
`

const Text = styled.p`
  font-family: 'pressStart', sans-serif;
  font-weight: 300;
  color: white;
  text-align: left;

  margin-top: 20px;
`

const IconName = styled.p`
  text-align: center;
  font-size: 30px;
  color: #fff;

  margin-top: 20px;
`

const Box = styled.div``

export { CharacterBoardWrapper, Title, Box, Text, IconName }