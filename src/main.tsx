import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/global.tsx";
import { MenuProvider } from "./contexts/MenuContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>
);
