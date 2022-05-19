import styled from "styled-components";

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100vw;
  padding: 30px 80px 50px 40px;

  background-color: rgba(127,47,177,0.8);
  
  font-size: 40px;
  color: #fff;
  letter-spacing: 2px;
`;

const Description = styled.span`
  text-align: center;
`

const Register = styled.p`
  text-align: center;
  font-size: 35px;
`

const Button = styled.button`
  font-family: 'pressStart', sans-serif;
  font-weight: 300;

  background-color: #e44eae;
  color: #fff;

  border-radius: 30px;
  padding: 25px 20px;

  font-size: 22px;

  cursor: pointer;
`

const Box = styled.div``

export { DescriptionWrapper, Description, Register, Button, Box }