import { useState } from "react";
import ProfileIcon from "../ProfileIcon/Index";
import { CharacterBoardWrapper, Title, Box, Text, IconName } from "./style";

const IconBoard = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  marginTop: "-40px",
};

export default function CharacterBoard() {
  const [icon, setIcon] = useState("Escolha seu personagem");

  return (
    <CharacterBoardWrapper>
      <Title>Escolha seu icone:</Title>
      <Box style={IconBoard}>
        <ProfileIcon
          imagePath="../../../public/img/perfil01.png"
          setIcon={setIcon}
          icon="Rick Sanchez"
        />
        <ProfileIcon
          imagePath="../../../public/img/perfil02.png"
          time="5.5s"
          setIcon={setIcon}
          icon="Beth Smith"
        />
        <ProfileIcon
          imagePath="../../../public/img/perfil03.png"
          time="6s"
          setIcon={setIcon}
          icon="Jerry Smith"
        />
        <ProfileIcon
          imagePath="../../../public/img/perfil04.png"
          time="6.5s"
          setIcon={setIcon}
          icon="Gato Falante"
        />
      </Box>
      <Text>
        O icone que você selecionar irá se tornar sua foto de perfil e o seu
        cursor do mouse.
      </Text>
      <IconName>{icon}</IconName>
    </CharacterBoardWrapper>
  );
}
