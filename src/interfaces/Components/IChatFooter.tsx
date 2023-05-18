import { FieldValue } from "firebase/firestore";

export interface IChatFooterProps {
  chatId: string;
}

export interface IMessage {
  message: string;
  user: string;
  photoURL?: string;
  timestamp: FieldValue;
}
