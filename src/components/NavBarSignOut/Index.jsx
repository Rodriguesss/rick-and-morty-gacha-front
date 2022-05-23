import { StyledLink } from "../../css";
import { NavBarSignOutWrapper, Button } from "./style";
import Logo from "../../assets/img/rick-and-morty-logo.png";

export default function NavBarSignOut() {
  return (
    <NavBarSignOutWrapper>
      <StyledLink to="/">
        <Button>Voltar</Button>
      </StyledLink>
      <img src={Logo} height="auto" width="250" />
    </NavBarSignOutWrapper>
  );
}
