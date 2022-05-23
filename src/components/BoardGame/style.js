import styled from "styled-components";

const BoardGameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Title = styled.h1`
  background-color: rgba(255, 255, 255, 0.6);
  padding: 15px;

  width: 60%;

  font-weight: 300;
  font-size: 32px;
  text-align: center;

  margin-top: 25px;
`

const BoardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  background-color: rgba(255, 255, 255, 0.6);
  height: 100%;
  width: 62%;

  padding: 40px;
  margin-top: 50px;

  border-radius: 15px;

  opacity: 0.93;

  text-align: center;
`

const Message = styled.h2`
  font-weight: 300;
  font-size: 35px;

  opacity: 1;
`

export { BoardGameWrapper, Title, BoardImage, Message }