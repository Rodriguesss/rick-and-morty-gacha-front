import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  font-family: 'pressStart', sans-serif;
  font-weight: 300;
  text-align: center;
  color: #fff;
`;

const Input = styled.input`
  padding: 10px 15px;

  width: 60%;

  background-color: #cea9dc;
  color: #fff;

  font-size: 17px;

  border-radius: 5px;

  &::placeholder {
    color: #fff;
  }
`

const TextLabel = styled.label`
  font-size: 16px;
`

const BackgroundWrapper = styled.div`
  width: 32%;

  background-color: rgba(127,47,177,0.8);

  padding: 20px 20px 10px 20px;
`

const Button = styled.button`
  background-color: #e44eae;
  color: #fff;

  border-radius: 30px;
  padding: 25px 20px;

  margin-top: 20px;

  font-size: 20px;

  cursor: pointer;
`

const Title = styled.h1`
  transform: translateY(-45px);

  font-weight: 300;
  font-size: 37px;  
  color: #fff;
  text-align: center;
`

export { Form, Input, TextLabel, BackgroundWrapper, Button, Title };