// CSS
import * as S from "./MessageStyles";
// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
// Interface
interface IMessageProps {
  user: string;
  message: IMessage;
}

interface IMessage {
  message: string | null;
  timestamp: number | string;
}

const Message = ({ user, message }: IMessageProps) => {
  const [userLoggedIn] = useAuthState(auth);
  const formattedDate = new Date(message.timestamp).toLocaleString('pt-BR', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  return (
    <S.Container>
      <S.Line className={userLoggedIn?.email === user ? "me" : ""}>
        <S.Content>
          <S.Message>{message.message}</S.Message>
          <S.MessageDate>
            {formattedDate}
          </S.MessageDate>
        </S.Content>
      </S.Line>
    </S.Container>
  );
};

export default Message;
