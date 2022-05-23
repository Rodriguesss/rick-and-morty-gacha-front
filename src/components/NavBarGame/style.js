import styled from "styled-components";

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  padding: 5px 50px;

  background-color: rgba(204,219,231, 0.4);

  overflow: hidden;
  z-index: 100;
`;

const ProfileImage = styled.img`
  border: 1px solid black;
  border-radius: 30px;

  padding: 3px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const Image = styled.img`
  cursor: pointer;

  &:hover {
    width: 27px;
  }
`

const Text = styled.p`
  font-size: 20px;
`;

const Box = styled.div``;

export { NavBarWrapper, ProfileImage, Text, Box, Image }