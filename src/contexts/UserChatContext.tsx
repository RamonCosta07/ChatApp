// React
import React, { createContext, useState } from "react";
// Interfaces
import { IProviderProps } from "../interfaces/Contexts/IContexts";
import { IUserChat, IUserChatContext } from "../interfaces/Contexts/IUserChat";

const UserChatContext = createContext<IUserChatContext>({
  userChat: {
    chatId: "",
    name: "",
    photoURL: null,
  },
  setUserChat: () => {},
});

const UserChatProvider: React.FC<IProviderProps> = ({ children }) => {
  const [userChat, setUserChat] = useState<IUserChat | null>(null);

  return (
    <UserChatContext.Provider value={{ userChat, setUserChat }}>
      {children}
    </UserChatContext.Provider>
  );
};

export { UserChatContext, UserChatProvider };
