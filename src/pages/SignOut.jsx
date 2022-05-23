import FormSignOut from "../components/FormSignOut/Index";
import NavBarSignOut from "../components/NavBarSignOut/Index";
import styled from "styled-components";
import { BackgroundImage } from "../css";

export default function SignOut() {
  return (
    <BackgroundImage path="/public/img/812062.png">
      <NavBarSignOut />
      <SignOutWrapper>
        <FormSignOut />
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
