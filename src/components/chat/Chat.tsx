// Components
import ChatHeader from "../chatHeader/ChatHeader";
import ChatBody from "../chatBody/ChatBody";
import ChatFooter from "../chatFooter/ChatFooter";
import Default from "../default/Default";
// CSS
import { Container } from "./ChatStyles";
// React
import { useContext } from "react";
// Context
import { UserChatContext } from "../../contexts/UserChatContext";

const Chat = () => {
  const { userChat } = useContext(UserChatContext);

  if (!userChat) return <Default />;

  return (
    <Container>
      <ChatHeader photoURL={userChat.photoURL || ""} name={userChat.name} />
      <ChatBody chatId={userChat.chatId} />
      <ChatFooter chatId={userChat.chatId} />
    </Container>
  );
};

export default Chat;
