import { Icon, Floating } from "./style";

export default function ProfileIcon({
  imagePath,
  setIcon,
  icon,
  id,
  setProfileIconId,
}) {
  function handleIcon() {
    setIcon(icon);
    setProfileIconId(id);
  }

  return (
    <Floating>
      <Icon src={imagePath} height="auto" width="90" onClick={handleIcon} />
    </Floating>
  );
}
