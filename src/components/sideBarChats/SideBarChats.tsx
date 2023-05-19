// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../services/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
// CSS
import * as S from "./SideBarChatsStyles";
// Components
import SideBarChatsItem from "../sideBarChatsItem/SideBarChatsItem";

const SideBarChats = () => {
  const [user] = useAuthState(auth);

  const refChat = query(
    collection(db, "chats"),
    where("users", "array-contains", user?.email)
  );
  const [chatSnapshot] = useCollection(refChat);

  return (
    <S.Container>
      {chatSnapshot?.docs.map((item) => (
        <S.Content key={item.id}>
          {user && (
            <SideBarChatsItem
              id={item.id}
              users={item.data().users}
              user={user}
            />
          )}
        </S.Content>
      ))}
    </S.Container>
  );
};

export default SideBarChats;
