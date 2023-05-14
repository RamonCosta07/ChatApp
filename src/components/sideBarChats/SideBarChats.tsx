// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../services/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
// CSS
import * as S from "./SideBarChatsStyles";
// Components
import SideBarChatsItem from "../SideBarChatsItem/SideBarChatsItem";
import { collection, query, where } from "firebase/firestore";
// Interface
interface IProps {
  userChat: string;
  setUserChat: React.Dispatch<React.SetStateAction<string | null>>;
}

const SideBarChats = ({ userChat, setUserChat }: IProps) => {
  const [user] = useAuthState(auth);

  const refChat = query(
    collection(db, "chats"),
    where("users", "array-contains", user?.email)
  );
  const [chatSnapshot] = useCollection(refChat);

  console.log(userChat);

  return (
    <S.Container>
      {chatSnapshot?.docs.map((item) => (
        <S.Content key={item.id}>
          {user && (
            <SideBarChatsItem
              id={item.id}
              users={item.data().users}
              user={user}
              setUserChat={setUserChat}
              userChat={userChat}
            />
          )}
        </S.Content>
      ))}
    </S.Container>
  );
};

export default SideBarChats;
