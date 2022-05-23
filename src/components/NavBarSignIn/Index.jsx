import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import services from "../../services/services";
import useAuth from "../../hooks/useAuth";
import {
  Box,
  Button,
  Form,
  Input,
  NavBarWrapper,
  ForgotPasswordLink,
} from "./style";

export default function NavBarSignIn() {
  const { login, setProfile } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function signIn(data) {
    try {
      const promise = await services.signIn(data);

      login(promise.data.token, promise.data.nickname);

      const profile = await services.findProfile(promise.data.token);

      setProfile(profile.data);

      alert("Logado com sucesso");

      navigate("/game");
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
      <Form onSubmit={handleSubmit((data) => signIn(data))}>
        <Box style={containerInputWrapper}>
          <Box style={forgotPasswordWrapper}>
            <Input
              {...register("nickname")}
              type="text"
              placeholder="Nickname"
            />
            <Input
              {...register("password")}
              type="password"
              placeholder="Senha"
            />
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
