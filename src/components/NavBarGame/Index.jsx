import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import services from "../../services/services";
import PortalWeapons from "../PortalWeapons/Index";
import { NavBarWrapper, ProfileImage, Text, Box, Image } from "./style";

const UserProfile = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
};

const GameProfile = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
};

export default function NavBarGame() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [profile, setProfile] = useState({});
  const [profileIcon, setProfileIcon] = useState({});
  const { nickname, token } = useAuth();

  useState(() => {
    findProfile();
  }, []);

  async function findProfile() {
    const { data: profile } = await services.findProfile(token);
    const { data: profileIcon } = await services.findProfileIcon(
      profile.profileIconId,
      token
    );
    setProfile(profile);
    setProfileIcon(profileIcon);
  }

  async function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <NavBarWrapper>
      <Box style={UserProfile}>
        <ProfileImage src={profileIcon.cursor2} width="50" height="auto" />
        <Text>{nickname}</Text>
      </Box>
      <Box style={GameProfile}>
        <PortalWeapons portalWeapons={profile.portalWeapons} />
        <Image
          src="../../../public/img/logout.png"
          height="auto"
          width="25"
          onClick={handleLogout}
        />
      </Box>
    </NavBarWrapper>
  );
}
