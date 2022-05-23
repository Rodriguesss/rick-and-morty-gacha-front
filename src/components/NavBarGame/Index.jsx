import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import services from "../../services/services";
import ProfileIcons from "../../utils/profileIcons";
import PortalWeapons from "../PortalWeapons/Index";
import { NavBarWrapper, ProfileImage, Text, Box } from "./style";

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
  gap: "160px",
};

export default function NavBarGame() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [profile, setProfile] = useState({});
  const [profileIcon, setProfileIcon] = useState({});
  const { nickname, token } = useAuth();

  useState(() => {
    findProfile();
    console.log(ProfileIcons[profileIcon.cursor1]);
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
      {console.log("nav", ProfileIcons[profileIcon.cursor1])}
      <Box style={UserProfile}>
        <ProfileImage
          src={ProfileIcons[profileIcon.cursor1]}
          width="50"
          height="auto"
        />
        <Text>{nickname}</Text>
      </Box>
      <Box style={GameProfile}>
        <PortalWeapons portalWeapons={profile.portalWeapons} />
        <Text onClick={handleLogout}>SAIR</Text>
      </Box>
    </NavBarWrapper>
  );
}
