import { StyledLink } from "../../css";
import { Text, Floating } from "./style";

export default function HomeButton() {
  return (
    <Floating>
      <StyledLink to="/game">
        <Text>Início</Text>
      </StyledLink>
    </Floating>
  );
}
