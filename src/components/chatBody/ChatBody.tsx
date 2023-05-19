// CSS
import * as S from "./ChatBodyStyles";
// Hooks
import { useEffect, useRef, useContext } from "react";
import { useSearchMessages } from "../../customHooks/useSearchMessages";
// Components
import Message from "../message/Message";
import SearchButtons from "../searchButtons/SearchButtons";
// Interface
import { IChatBody } from "../../interfaces/Components/IChatBody";
// Context
import { SearchContext } from "../../contexts/SearchContext";

const ChatBody = ({ chatId }: IChatBody) => {
  const { searchTerm } = useContext(SearchContext);
  const { messagesRes, handlePrevious, handleNext, highlightedMessages } =
    useSearchMessages(chatId, searchTerm);

  const refBody = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      refBody.current &&
      refBody.current.scrollHeight > refBody.current.offsetHeight
    ) {
      refBody.current.scrollTop =
        refBody.current.scrollHeight - refBody.current.offsetHeight;
    }
  }, [messagesRes]);

  const renderedMessages = messagesRes?.docs.map((message) => {
    const isHighlighted = message
      .data()
      .message.toLowerCase()
      .includes(searchTerm.toLowerCase());

    return (
      <S.MessageContainer
        key={message.id}
        highlighted={isHighlighted && searchTerm !== "" ? "true" : "false"}
        className={isHighlighted? "message highlighted" : "message"}
        id={message.id}
      >
        <Message
          user={message.data().user}
          message={{
            message: message.data().message,
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      </S.MessageContainer>
    );
  });

  return (
    <S.Container ref={refBody}>
      {renderedMessages}
      {searchTerm !== "" && highlightedMessages.length > 0 && (
        <SearchButtons
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      )}
    </S.Container>
  );
};

export default ChatBody;