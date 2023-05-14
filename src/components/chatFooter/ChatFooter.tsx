// Hooks
import { useState } from "react";
// CSS
import * as S from "./ChatFooterStyles";
// Icons
import { MdSend } from "react-icons/md";
// Firebase
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc, serverTimestamp, FieldValue } from "firebase/firestore";
// Interfaces
interface IMessage {
  message: string;
  user: string;
  photoURL?: string;
  timestamp: FieldValue;
}

interface IChatInput {
  chatId: string;
}

const ChatFooter = ({ chatId }: IChatInput) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMessage: IMessage = {
      message,
      user: user?.email ?? "",
      photoURL: user?.photoURL ?? '',
      timestamp: serverTimestamp(),
    };

    try {
      const messagesCollectionRef = collection(db, "chats", chatId, "messages");
      await addDoc(messagesCollectionRef, newMessage);
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSendMessage}>
        <S.Input
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <MdSend onClick={handleSendMessage} />
      </S.Form>
    </S.Container>
  );
};

export default ChatFooter;
