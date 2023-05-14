// Firebase
import { User } from "firebase/auth";
import { db } from "../../services/firebase";
// CSS
import * as S from "./SideBarChatsItemStyles";
// Icons
import { MdPerson } from "react-icons/md";
import { query, collection, where, getDocs } from "firebase/firestore";
// Hooks
import { useEffect, useState } from "react";

const getUser = (users: string[], userLogged: User | null) => {
  return users.find((user) => user !== userLogged?.email) ?? "";
};

// Interface
interface ISideBarChatsItemProps {
  id: string;
  users: string[];
  user?: User | null; // Usar User corretamente na interface
  setUserChat: React.Dispatch<React.SetStateAction<string | null>>;
  //active: string;
}

const SideBarChatsItem = ({
  id,
  users,
  user,
  setUserChat,
}: ISideBarChatsItemProps) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
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
    const userItem = querySnapshot.docs[0].data();
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
    return <div>Loading...</div>;
  }

  const item = getUser(users, user!);

  const handleNewChat = async() => {
    const userChat = {
      chatId: id,
      name: item.split("@")[0],
      photoURL: avatarUrl,
    };

    setUserChat(JSON.stringify(userChat));
  };

  return (
    <S.Container onClick={handleNewChat}>
      {avatarUrl ? <S.Avatar src={avatarUrl} /> : <MdPerson />}
      <S.Name>{item.split("@")[0]}</S.Name>
    </S.Container>
  );
};

export default SideBarChatsItem;
