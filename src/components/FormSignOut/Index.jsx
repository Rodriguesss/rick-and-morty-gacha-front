import {
  BackgroundWrapper,
  Form,
  Input,
  TextLabel,
  Button,
  Title,
} from "./style";

export default function FormSignOut() {
  return (
    <BackgroundWrapper>
      <Title>Criar sua conta agora!</Title>
      <Form onSubmit={() => alert("registrado")}>
        <TextLabel>Insira seu nickname:</TextLabel>
        <Input type="text" placeholder="nickname"></Input>

        <TextLabel>Insira um email válido:</TextLabel>
        <Input type="email" placeholder="email"></Input>

        <TextLabel>Insira uma senha:</TextLabel>
        <Input type="password" placeholder="senha"></Input>

        <TextLabel>Repita a senha:</TextLabel>
        <Input type="password" placeholder="repetir senha"></Input>

        <Button>Registrar</Button>
      </Form>
    </BackgroundWrapper>
  );
}
