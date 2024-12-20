
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LoginPage} from "./Components/Login/LoginPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
);
