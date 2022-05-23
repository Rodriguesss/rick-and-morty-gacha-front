import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [nickname, setNickname] = useLocalStorage("nickname", null);
  const [token, setToken] = useLocalStorage("token", null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [banner, setBanner] = useLocalStorage("banner", null);
  const [profile, setProfile] = useLocalStorage("profile", null);

  function login(token, nickname) {
    setToken(token);
    setNickname(nickname);
  }

  function logout() {
    setToken(null);
    setNickname(null);
    setBanner(null);
    setProfile(null);
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        token,
        setToken,
        nickname,
        setNickname,
        modalIsOpen,
        setModalIsOpen,
        banner,
        setBanner,
        profile,
        setProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
