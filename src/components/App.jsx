import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../css";
import { ResetStyle } from "../css/reset";
import SignIn from "../pages/SignIn";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
