// Components
import ChatHeader from "../chatHeader/ChatHeader";
import ChatBody from "../chatBody/ChatBody";
import ChatFooter from "../chatFooter/ChatFooter";
import Default from "../default/Default";
// CSS
import { Container } from "./ChatStyles";
import { useEffect, useState } from "react";
// Interfaces
interface IUserChatString {
  chatId: string;
  name: string;
  photoURL: string | null;
}

type IProps = {
  userChat: string;
}

const Chat = ({ userChat }: IProps) => {
  const [chatData, setChatData] = useState<IUserChatString | null>(null);

  useEffect(() => {
    if (userChat) {
      try {
        const parsedChatData = JSON.parse(userChat) as IUserChatString;
        setChatData(parsedChatData);
      } catch (error) {
        console.error(error);
      }
    }
  }, [userChat]);

  if (!chatData) return <Default />;

  return (
    <Container>
      <ChatHeader photoURL={chatData.photoURL || ""} name={chatData.name} />
      <ChatBody chatId={chatData.chatId} />
      <ChatFooter chatId={chatData.chatId} />
    </Container>
  );
};

export default Chat;