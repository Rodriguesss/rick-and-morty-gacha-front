import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CharacterSummon from "../components/CharacterSummon/Index";
import HomeButton from "../components/HomeButton/Index";
import NavBarGame from "../components/NavBarGame/Index";
import { BackgroundImage } from "../css";
import useAuth from "../hooks/useAuth";

export default function Banner() {
  const { banner } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("banner") === "null") {
      navigate("/game");
    }
  }, []);

  if (!banner) return "loading";

  return (
    <BackgroundImage path={banner?.path}>
      <NavBarGame />
      <CharacterSummon
        bannerId={banner?.id}
        title={banner?.title}
        description={banner?.description}
      />
      <HomeButton />
    </BackgroundImage>
  );
}
