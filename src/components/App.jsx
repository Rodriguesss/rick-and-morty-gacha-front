import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../css";
import { ResetStyle } from "../css/reset";
import SignIn from "../pages/SignIn";
import SignOut from "../pages/SignOut";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-out" element={<SignOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
