import {
  Box,
  Button,
  Form,
  Input,
  NavBarWrapper,
  ForgotPasswordLink,
} from "./style";

export default function NavBarSignIn() {
  async function singIn() {
    try {
      alert("Submit");
    } catch {
      alert("Usuário ou senha inválidos.");
    }
  }

  const forgotPasswordWrapper = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "30px",
    width: "100%",
  };

  const containerInputWrapper = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    width: "65%",
  };

  return (
    <NavBarWrapper>
      <Form onSubmit={() => singIn()}>
        <Box style={containerInputWrapper}>
          <Box style={forgotPasswordWrapper}>
            <Input type="text" placeholder="Nickname" />
            <Input type="password" placeholder="Senha" />
          </Box>

          <Box>
            <ForgotPasswordLink>Esqueci a senha</ForgotPasswordLink>
          </Box>
        </Box>

        <Button type="submit">Entrar</Button>
      </Form>
    </NavBarWrapper>
  );
}
