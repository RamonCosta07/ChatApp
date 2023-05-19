// Firebase
import { User } from "firebase/auth";
import { db } from "../../services/firebase";
import { query, collection, where, getDocs } from "firebase/firestore";
// CSS
import * as S from "./SideBarChatsItemStyles";
// Icons
import { MdPerson } from "react-icons/md";
// Hooks
import { useEffect, useState } from "react";
// Components
import Loading from "../loading/Loading";
// Context
import { UserChatContext } from "../../contexts/UserChatContext";
import { useContext } from "react";
// Interfaces
import {
  ISideBarChatsItemProps,
  IUser,
} from "../../interfaces/Components/ISideBarChatsItem";

const getUser = (users: string[], userLogged: User | null) => {
  return users.find((user) => user !== userLogged?.email) ?? "";
};

const SideBarChatsItem = ({ id, users, user }: ISideBarChatsItemProps) => {
  // States
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  // Context
  const { userChat, setUserChat } = useContext(UserChatContext);

  const getUserItem = async (users: string[], user: User) => {
    const q = query(
      collection(db, "users"),
      where("email", "==", getUser(users, user))
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return null;
    }
    const userItem = querySnapshot.docs[0].data() as IUser;
    return userItem;
  };

  useEffect(() => {
    const getAvatar = async () => {
      const userItem = await getUserItem(users, user!);
      if (userItem) {
        setAvatarUrl(userItem.photoURL);
      }
      setLoading(false);
    };
    getAvatar();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const item = getUser(users, user!);

  const handleNewChat = async () => {
    const userChat = {
      chatId: id,
      name: item.split("@")[0],
      photoURL: avatarUrl,
    };

    setUserChat(userChat);
  };

  return (
    <S.Container
      onClick={handleNewChat}
      className={userChat?.chatId === id ? "active" : ""}
    >
      {avatarUrl ? <S.Avatar src={avatarUrl} /> : <MdPerson />}
      <S.Name>{item.split("@")[0]}</S.Name>
    </S.Container>
  );
};

export default SideBarChatsItem;
