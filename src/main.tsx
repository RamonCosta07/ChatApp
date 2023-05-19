import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/global.tsx";
import { MenuProvider } from "./contexts/MenuContext.tsx";
import { UserChatProvider } from "./contexts/UserChatContext.tsx";
import { SearchProvider } from "./contexts/SearchContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <UserChatProvider>
      <SearchProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </SearchProvider>
    </UserChatProvider>
  </React.StrictMode>
);
