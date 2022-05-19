import {
  DescriptionWrapper,
  Description,
  Register,
  Button,
  Box,
} from "./style";

const registerContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  width: "50%",
};

export default function DescriptionSignIn() {
  return (
    <DescriptionWrapper>
      <Description>
        <span>Colecione diversos personagens da série </span>
        <img
          src="../../public/img/rick-and-morty-logo.png"
          height="70"
          width="210"
        />
      </Description>
      <Box style={registerContainer}>
        <Register>Crie sua conta agora</Register>
        <Button>Registrar</Button>
      </Box>
    </DescriptionWrapper>
  );
}
