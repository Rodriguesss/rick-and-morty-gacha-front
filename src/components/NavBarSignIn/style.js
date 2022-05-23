import styled from "styled-components";

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  padding: 15px 15px 5px 15px;

  background-color: rgba(72,39,205, 0.8);

  overflow: hidden;
  z-index: 100;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  font-family: 'pressStart', sans-serif;
  font-weight: 300;

  width:70%;
`;

const Input = styled.input`
  padding: 10px;

  width: 85%;

  background-color: #cea9dc;
  color: #fff;

  font-size: 17px;

  border-radius: 5px;

  &::placeholder {
    color: #fff;
  }
`;

const Button = styled.button`
  background-color: #e44eae;
  color: #fff;

  border-radius: 30px;
  padding: 17px 20px;

  font-size: 20px;

  height: auto;

  cursor: pointer;
`;

const TextError = styled.span`
  color: red;
  font-size: 12px;
  text-align: left;
`

const Box = styled.div``

export { NavBarWrapper, Form, Input, Button, Box, TextError };
