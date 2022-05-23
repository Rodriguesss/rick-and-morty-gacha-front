import { StyledLink } from "../../css";
import { Text, Floating } from "./style";

export default function CharactersButton() {
  return (
    <Floating time="2s">
      <StyledLink to="/characters">
        <Text>Personagens</Text>
      </StyledLink>
    </Floating>
  );
}
