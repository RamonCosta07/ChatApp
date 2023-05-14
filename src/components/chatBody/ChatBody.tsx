// CSS
import { Container } from './ChatBodyStyles';
// Hooks
import { useEffect, useRef } from "react";
// Firebase
import { db } from "../../services/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, orderBy } from 'firebase/firestore';
import Message from "../message/Message";
// Interface
interface IChatBody{
  chatId: string;
}

const ChatBody = ({ chatId }: IChatBody) => {
  const messagesQuery = query(
    collection(db, 'chats', chatId, 'messages'),
    orderBy('timestamp', 'asc')
  );
  const [messagesRes] = useCollection(messagesQuery);

  const refBody = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (refBody.current && refBody.current.scrollHeight > refBody.current.offsetHeight) {
      refBody.current.scrollTop =
        refBody.current.scrollHeight - refBody.current.offsetHeight;
    }
  }, [messagesRes]);

  return (
    <Container ref={refBody}>
    {messagesRes?.docs.map((message) => (
      <Message
        key={message.id}
        user={message.data().user}
        message={{
          message: message.data().message,
          timestamp: message.data().timestamp?.toDate().getTime(),
        }}
      />
    ))}
  </Container>
  )
}

export default ChatBody