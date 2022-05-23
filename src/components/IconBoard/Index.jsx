import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import services from "../../services/services";
import ProfileIcon from "../ProfileIcon/Index";
import { IconBoardWrapper, Title, Box, Text, IconName, Button } from "./style";

const IconsWrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  marginTop: "-40px",
};

export default function IconBoard() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [profileIcons, setProfileIcons] = useState([]);
  const [profileIconId, setProfileIconId] = useState(0);
  const [icon, setIcon] = useState("Escolha seu personagem");

  useEffect(() => {
    getProfileIcons();
  }, []);

  async function getProfileIcons() {
    const { data } = await services.findAllProfileIcons(token);
    setProfileIcons(data);
  }

  async function handleSubmit() {
    try {
      await services.linkProfileIcon({ profileIconId }, token);

      alert("linkado sua foto com sucesso");

      navigate("/game");
    } catch ({ response }) {
      alert(response.data.message);

      if (response.status === 409) navigate("/game");
    }
  }

  return (
    <IconBoardWrapper>
      <Title>Escolha seu icone:</Title>
      <Box style={IconsWrapper}>
        {profileIcons.map((profileIcon, index) => (
          <ProfileIcon
            key={index}
            id={profileIcon.id}
            setProfileIconId={setProfileIconId}
            imagePath={profileIcon.cursor2}
            setIcon={setIcon}
            icon={profileIcon.name}
          />
        ))}
      </Box>
      <Text>
        O icone que você selecionar irá se tornar sua foto de perfil e o seu
        cursor do mouse.
      </Text>
      <IconName>{icon}</IconName>
      <Button onClick={handleSubmit}>Entrar</Button>
    </IconBoardWrapper>
  );
}
