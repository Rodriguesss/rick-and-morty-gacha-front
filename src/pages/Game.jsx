import { useEffect } from "react";
import { BackgroundImage } from "../css";
import NavBarGame from "../components/NavBarGame/Index";
import BannerContainer from "../components/BannerContainer/Index";
import CharactersButton from "../components/CharactersButton/Index";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Game() {
  const { profile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    checkProfile();
  }, []);

  function checkProfile() {
    if (!profile) {
      navigate("/profile-icon");
    }
  }

  return (
    <BackgroundImage path="/public/img-min/794366-min.png">
      <NavBarGame />
      <BannerContainer />
      <CharactersButton />
    </BackgroundImage>
  );
}
