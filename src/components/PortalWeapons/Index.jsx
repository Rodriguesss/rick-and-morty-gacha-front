import { Box, PortalWeaponsWrapper } from "./style";
import PortalWeapon from "../../assets/img/portalweapon.png";

const QuantityPortalWeapons = {
  display: "flex",
  justifyContent: "flex-end",
  backgroundColor: "#fff",
  padding: "5px",
  width: "50px",
};

export default function PortalWeapons({ portalWeapons }) {
  return (
    <PortalWeaponsWrapper>
      <Box style={QuantityPortalWeapons}>{portalWeapons}</Box>
      <img src={PortalWeapon} width="30" height="auto" />
    </PortalWeaponsWrapper>
  );
}
