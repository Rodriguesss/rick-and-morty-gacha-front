import { StyledLink } from "../../css";
import { NavBarSignOutWrapper, Button } from "./style";

export default function NavBarSignOut() {
  return (
    <NavBarSignOutWrapper>
      <StyledLink to="/">
        <Button>Voltar</Button>
      </StyledLink>
      <img
        src="../../public/img/rick-and-morty-logo.png"
        height="auto"
        width="250"
      />
    </NavBarSignOutWrapper>
  );
}
