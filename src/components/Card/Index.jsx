import { CardWrapper, Image, Title } from "./style";

export default function Card({ name, pathImage }) {
  return (
    <CardWrapper path={pathImage}>
      <Image src="../../public/img/card_01.png" height="auto" width="100%" />
      <Title>{name}</Title>
    </CardWrapper>
  );
}
