import { Floating } from "../../css";
import { Icon } from "./style";

export default function ProfileIcon({ imagePath, time, setIcon, icon }) {
  function handleIcon() {
    setIcon(icon);
  }

  return (
    <Floating time={time}>
      <Icon src={imagePath} height="auto" width="90" onClick={handleIcon} />
    </Floating>
  );
}
