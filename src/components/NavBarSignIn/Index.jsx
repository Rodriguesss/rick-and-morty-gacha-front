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
  TextError,
} from "./style";

const forgotPasswordWrapper = {
  display: "flex",
  width: "100%",
};

const containerInputWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "5px",
  width: "80%",
  height: "60px",
};

const errorContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "5px",
};

export default function NavBarSignIn() {
  const { login, setProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  async function signIn(data) {
    console.log(data);
  }

  const onSubmit = (data) => console.log(data);

  return (
    <NavBarWrapper>
      <Form onSubmit={handleSubmit(signIn)}>
        <Box style={containerInputWrapper}>
          <Box style={forgotPasswordWrapper}>
            <Box style={errorContainer}>
              <Input
                id="nickname"
                aria-invalid={errors.nickname ? "true" : "false"}
                {...register("nickname", { required: true, maxLength: 12 })}
                type="text"
                placeholder="Nickname"
              />
              {errors.nickname && errors.nickname.type === "required" && (
                <TextError>Nickname é obrigatório</TextError>
              )}
              {errors.nickname && errors.nickname.type === "maxLength" && (
                <TextError>Você excedeu o tamanho máximo</TextError>
              )}
            </Box>
            <Box style={errorContainer}>
              <Input
                id="password"
                aria-invalid={errors.password ? "true" : "false"}
                {...register("password", { required: true, maxLength: 15 })}
                type="password"
                placeholder="Senha"
              />
              {errors.password && errors.password.type === "required" && (
                <TextError>Senha é obrigatória</TextError>
              )}
              {errors.password && errors.password.type === "maxLength" && (
                <TextError>Você excedeu o tamanho máximo</TextError>
              )}
            </Box>
            <Button type="submit">Entrar</Button>
          </Box>
        </Box>
      </Form>
    </NavBarWrapper>
  );
}
