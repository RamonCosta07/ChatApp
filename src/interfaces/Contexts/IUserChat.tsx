// React
import { Dispatch, SetStateAction } from "react";

export interface IUserChat {
  chatId: string;
  name: string;
  photoURL: string | null;
}

export interface IUserChatContext {
  userChat: IUserChat | null;
  setUserChat: Dispatch<SetStateAction<IUserChat | null>>;
}
