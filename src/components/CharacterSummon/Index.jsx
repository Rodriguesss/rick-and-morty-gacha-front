import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import services from "../../services/services";
import ModalCharacter from "../ModalCharacter/Index";
import { Box, Button, CharacterSummonWrapper, Gif, Text, Title } from "./style";
import PortalWeaponGif from "../../assets/gif/portal.gif";

export default function CharacterSummon({ bannerId }) {
  const [character, setCharacter] = useState({});
  const { token, profile, banner, setModalIsOpen } = useAuth();

  async function handleSummon() {
    const { data } = await services.summonCharacter({ bannerId }, token);
    setCharacter(data);
    openModal();
  }

  function openModal() {
    setModalIsOpen(true);
  }

  const summonTitle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    padding: "10px 30px",
    width: "50%",
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: "15px",
  };

  const boardSummon = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    padding: "20px 30px",
    width: "40%",
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: "15px",
  };

  return (
    <>
      <CharacterSummonWrapper>
        <Box style={summonTitle}>
          <Title>Banner</Title>
          <Title>{banner.title}</Title>
        </Box>
        <Box style={boardSummon}>
          <Text>{banner.description}</Text>
          <Text>INVOCAR PERSONAGEM?</Text>
          <Gif src={PortalWeaponGif} height="auto" width="150" />
          {profile.portalWeapons > 0 && (
            <Button onClick={handleSummon}>INVOCAR</Button>
          )}
        </Box>
      </CharacterSummonWrapper>
      <ModalCharacter name={character.name} pathImage={character.path} />
    </>
  );
}
