import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import services from "../../services/services";
import {
  BackgroundWrapper,
  Form,
  Input,
  TextLabel,
  Button,
  Title,
} from "./style";
import { toast } from "react-toastify";

export default function FormSignOut() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  async function signUp(data) {
    try {
      comparePasswords(data);

      delete data.repeat_password;

      await services.signOut(data);

      delete data.email;

      const promise = await services.signIn(data);

      login(promise.data.token, promise.data.nickname);

      await services.createProfile(promise.data.token);

      navigate("/profile-icon");
    } catch ({ response }) {
      toast(response.data.message);
    }
  }

  function comparePasswords({ password, repeat_password }) {
    if (password !== repeat_password) {
      throw { message: "Senhas não coincidem" };
    }
  }

  return (
    <BackgroundWrapper>
      <Title>Criar sua conta agora!</Title>
      <Form onSubmit={handleSubmit((data) => signUp(data))}>
        <TextLabel>Insira seu nickname:</TextLabel>
        <Input
          {...register("nickname")}
          type="text"
          minLength="3"
          maxLength="12"
          placeholder="nickname"
        ></Input>

        <TextLabel>Insira um email válido:</TextLabel>
        <Input {...register("email")} type="email" placeholder="email"></Input>

        <TextLabel>Insira uma senha:</TextLabel>
        <Input
          {...register("password")}
          type="password"
          minLength="3"
          maxLength="15"
          placeholder="senha"
        ></Input>

        <TextLabel>Repita a senha:</TextLabel>
        <Input
          {...register("repeat_password")}
          type="password"
          minLength="3"
          maxLength="15"
          placeholder="repetir senha"
        ></Input>

        <Button>Registrar</Button>
      </Form>
    </BackgroundWrapper>
  );
}
