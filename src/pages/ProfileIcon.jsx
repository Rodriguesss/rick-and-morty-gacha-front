import IconBoard from "../components/IconBoard/Index";
import NavBarSignOut from "../components/NavBarSignOut/Index";
import styled from "styled-components";
import { BackgroundImage } from "../css";

export default function ProfileIcon() {
  return (
    <BackgroundImage path="/public/img-min/812062-min.png">
      <NavBarSignOut />
      <SignOutWrapper>
        <IconBoard />
      </SignOutWrapper>
    </BackgroundImage>
  );
}

const SignOutWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 0 auto;
`;
