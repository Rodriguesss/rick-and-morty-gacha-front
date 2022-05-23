import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { GlobalStyle } from "../css";
import { ResetStyle } from "../css/reset";
import Banner from "../pages/Banner";
import Characters from "../pages/Characters";
import Game from "../pages/Game";
import ProfileIcon from "../pages/ProfileIcon";
import SignIn from "../pages/SignIn";
import SignOut from "../pages/SignOut";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <ToastContainer />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-out" element={<SignOut />} />
            <Route path="/game" element={<Game />} />
            <Route path="/profile-icon" element={<ProfileIcon />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/banner" element={<Banner />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
