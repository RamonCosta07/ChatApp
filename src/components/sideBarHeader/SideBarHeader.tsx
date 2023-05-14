import * as S from "./SideBarHeaderStyles";
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
import * as EmailValidator from "email-validator";
// Firebase
import { auth, db } from "../../services/firebase";
import { collection, query, where, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
// Interface
interface ISideBarHeaderProps {
  setUserChat: React.Dispatch<React.SetStateAction<string | null>>;
}

const SideBarHeader = ({ setUserChat }: ISideBarHeaderProps) => {
  const [user] = useAuthState(auth);
  const chatRef = collection(db, "chats");
  const refChat = query(chatRef, where("users", "array-contains", user?.email));
  const [chatSnapshot] = useCollection(refChat);

  const handleCreateChat = async () => {
    const emailInput = prompt("Escreva o e-mail correspondente");
    if (!emailInput) return;
    if (!EmailValidator.validate(emailInput)) {
      return alert("E-mail inválido!");
    } else if (emailInput === user?.email) {
      return alert("O e-mail deve ser diferente do seu");
    } else if (chatExists(emailInput)) {
      return alert("Chat já existe!");
    }
    await addDoc(chatRef, {
      users: [user?.email, emailInput],
    });
  };

  const chatExists = (emailChat: string) => {
    const chat = chatSnapshot?.docs.find(chat => chat.data().users.includes(emailChat));
    return chat != null && chat.data().users.length > 0 ? chat : null;
  };
  

  return (
    <S.Container>
      <S.Avatar
        src={user?.photoURL?.toString()}
        onClick={() => {
          auth.signOut();
          setUserChat(null);
        }}
      />
      <S.Options>
        <MdDonutLarge />
        <MdChat onClick={handleCreateChat} />
        <MdMoreVert />
      </S.Options>
    </S.Container>
  );
};

export default SideBarHeader;
