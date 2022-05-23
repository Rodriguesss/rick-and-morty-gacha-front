import styled from "styled-components";

const IconBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(127,47,177,0.8);

  border-radius: 10px;

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

const Button = styled.button`
  font-family: 'pressStart', sans-serif;
  font-weight: 300;

  background-color: #e44eae;
  color: #fff;

  border-radius: 30px;
  padding: 20px 20px;
  margin-top: 30px;

  font-size: 25px;

  cursor: pointer;
`;

const Box = styled.div``

export { IconBoardWrapper, Title, Box, Text, IconName, Button }