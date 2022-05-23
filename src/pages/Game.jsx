import { BackgroundImage } from "../css";
import NavBarGame from "../components/NavBarGame/Index";
import BannerContainer from "../components/BannerContainer/Index";
import CharactersButton from "../components/CharactersButton/Index";

export default function Game() {
  return (
    <BackgroundImage path="/public/img/794366.png">
      <NavBarGame />
      <BannerContainer />
      <CharactersButton />
    </BackgroundImage>
  );
}
