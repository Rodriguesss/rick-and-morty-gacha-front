import styled from "styled-components";

const NavBarSignOutWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  padding: 5px 20px;

  background-color: rgba(72,39,205, 0.8);

  overflow: hidden;
  z-index: 100;
`

const Button = styled.button`
  font-family: 'pressStart', sans-serif;
  font-weight: 300;

  background-color: #e44eae;
  color: #fff;

  border-radius: 30px;
  padding: 20px;

  font-size: 20px;

  cursor: pointer;
`;

export { NavBarSignOutWrapper, Button }