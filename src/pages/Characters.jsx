import BoardGame from "../components/BoardGame/Index";
import HomeButton from "../components/HomeButton/Index";
import NavBarGame from "../components/NavBarGame/Index";
import { BackgroundImage } from "../css";

export default function Characters() {
  return (
    <BackgroundImage path="/public/img/633294.png">
      <NavBarGame />
      <BoardGame />
      <HomeButton />
    </BackgroundImage>
  );
}
