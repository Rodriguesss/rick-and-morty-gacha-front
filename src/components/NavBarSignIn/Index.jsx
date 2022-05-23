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
import { useEffect } from "react";

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
  const { login, setProfile, setBanner, setNickname, setToken } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    cleanLocalStorage();
  }, []);

  function cleanLocalStorage() {
    setToken(null);
    setNickname(null);
    setProfile(null);
    setBanner(null);
  }

  async function signIn(data) {
    try {
      const promise = await services.signIn(data);

      login(promise.data.token, promise.data.nickname);

      const profile = await services.findProfile(promise.data.token);

      if (!profile.data.profileIconId) {
        navigate("/profile-icon");
      } else {
        setProfile(profile.data);
        navigate("/game");
      }
    } catch {
      alert("Usuário ou senha inválidos.");
    }
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
