import NavBarSignIn from "../components/NavBarSignIn/Index";
import DescriptionSignIn from "../components/DescriptionSignIn/Index";
import { BackgroundImage } from "../css";

export default function SignIn() {
  return (
    <BackgroundImage path="/public/img-min/812062-min.png">
      <NavBarSignIn />
      <DescriptionSignIn />
    </BackgroundImage>
  );
}
