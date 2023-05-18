// Hooks
import { useState } from "react";
// CSS
import * as S from "./ChatFooterStyles";
// Icons
import { MdSend } from "react-icons/md";
// Firebase
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// Interfaces
import {
  IChatFooterProps,
  IMessage,
} from "../../interfaces/Components/IChatFooter";

const ChatFooter = ({ chatId }: IChatFooterProps) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");

  const handleSendMessage = (
    e: React.FormEvent<HTMLFormElement> | null = null
  ) => {
    if (e) {
      e.preventDefault();
    }

    const newMessage: IMessage = {
      message,
      user: user?.email ?? "",
      photoURL: user?.photoURL ?? "",
      timestamp: serverTimestamp(),
    };

    try {
      setTimeout(async () => {
        const messagesCollectionRef = collection(
          db,
          "chats",
          chatId,
          "messages"
        );
        await addDoc(messagesCollectionRef, newMessage);
        setMessage("");
      }, 100);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTextareaKeyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSendMessage}>
        <S.Input
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => handleTextareaKeyPress(e)}
          value={message}
        />
        <MdSend onClick={handleSendMessage} />
      </S.Form>
    </S.Container>
  );
};

export default ChatFooter;
