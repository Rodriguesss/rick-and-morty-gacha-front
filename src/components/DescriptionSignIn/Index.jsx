import { StyledLink } from "../../css/index";
import {
  DescriptionWrapper,
  Description,
  Register,
  Button,
  Box,
} from "./style";
import Logo from "../../assets/img/rick-and-morty-logo.png";

const registerContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  width: "50%",
};

export default function DescriptionSignIn() {
  return (
    <DescriptionWrapper>
      <Description>
        <span>Colecione diversos personagens da série </span>
        <img src={Logo} height="auto" width="350" />
      </Description>
      <Box style={registerContainer}>
        <Register>Crie sua conta agora</Register>
        <StyledLink to="/sign-out">
          <Button>Registrar</Button>
        </StyledLink>
      </Box>
    </DescriptionWrapper>
  );
}
