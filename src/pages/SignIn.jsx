import NavBarSignIn from "../components/NavBarSignIn/Index";
import DescriptionSignIn from "../components/DescriptionSignIn/Index";
import { BackgroundImage } from "../css";

export default function SignIn() {
  return (
    <BackgroundImage url="812062.png">
      <NavBarSignIn />
      <DescriptionSignIn />
    </BackgroundImage>
  );
}
