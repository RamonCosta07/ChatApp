// Firebase
import { User } from "firebase/auth";

export interface IUser {
  id: string;
  name: string;
  email: string;
  photoURL: string | null;
}

export interface ISideBarChatsItemProps {
  id: string;
  users: string[];
  user?: User | null;
}
