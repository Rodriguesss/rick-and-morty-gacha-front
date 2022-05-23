import { CardWrapper, Image, Title } from "./style";
import CardFrame from "../../assets/img/card_01.png";

export default function Card({ name, pathImage, id }) {
  return (
    <CardWrapper path={pathImage} id={id}>
      <Image src={CardFrame} height="auto" width="100%" />
      <Title>{name}</Title>
    </CardWrapper>
  );
}
