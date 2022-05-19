import styled from "styled-components";

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  padding: 15px 15px 30px 15px;

  background-color: rgba(72,39,205, 0.8);

  overflow: hidden;
  z-index: 100;
`;

const Form = styled.form`
  display: flex;
  gap: 20px;

  font-family: 'pressStart', sans-serif;
  font-weight: 300;
`;

const Input = styled.input`
  padding: 10px;

  width: 30%;

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
  padding: 10px 20px;

  font-size: 20px;

  cursor: pointer;
`;

const Box = styled.div``

const ForgotPasswordLink = styled.p`
  display: flex;
  justify-content: flex-end;

  color: #fff;
  font-size: 12px;
  cursor: pointer;
`;

export { NavBarWrapper, Form, Input, Button, Box, ForgotPasswordLink };
