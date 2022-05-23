import CharacterSummon from "../components/CharacterSummon/Index";
import HomeButton from "../components/HomeButton/Index";
import NavBarGame from "../components/NavBarGame/Index";
import { BackgroundImage } from "../css";
import useAuth from "../hooks/useAuth";

export default function Banner() {
  const { banner } = useAuth();

  return (
    <BackgroundImage path={banner.path}>
      <NavBarGame />
      <CharacterSummon
        bannerId={banner.id}
        title={banner.title}
        description={banner.description}
      />
      <HomeButton />
    </BackgroundImage>
  );
}
