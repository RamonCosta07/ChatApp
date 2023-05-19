// Hooks
import { useEffect, useState } from "react";
// Firebase
import { db } from "../services/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, orderBy } from "firebase/firestore";

export const useSearchMessages = (chatId: string, searchTerm: string) => {
  const messagesQuery = query(
    collection(db, "chats", chatId, "messages"),
    orderBy("timestamp", "asc")
  );
  const [messagesRes] = useCollection(messagesQuery);

  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);
  const [highlightedMessages, setHighlightedMessages] = useState<string[]>([]);

  useEffect(() => {
    if (messagesRes) {
      const filteredMessages = messagesRes.docs
        .filter((message) =>
          message
            .data()
            .message.toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
        .map((message) => message.id);

      setHighlightedMessages(filteredMessages);
      setHighlightedIndex(0);

      if (filteredMessages.length > 0) {
        const lastResultId = filteredMessages[filteredMessages.length - 1];
        const lastResultElement = document.getElementById(lastResultId);
        if (lastResultElement) {
          lastResultElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

          lastResultElement.classList.add("highlighted-animation");
        }
      } else {
        const lastMessageElement = document.querySelector(
          ".message:last-child"
        ) as HTMLElement;
        if (lastMessageElement) {
          lastMessageElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }
    }
  }, [searchTerm, messagesRes]);

  const handlePrevious = () => {
    if (highlightedMessages.length > 0) {
      let newIndex = highlightedIndex - 1;
      if (newIndex < 0) {
        newIndex = highlightedMessages.length - 1;
      }
      const messageId = highlightedMessages[newIndex];
      const element = document.getElementById(messageId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        setHighlightedIndex(newIndex);

        element.classList.add("highlighted-animation");
        setInterval(() => {
          element.classList.remove("highlighted-animation");
        }, 2000);
      }
    }
  };

  const handleNext = () => {
    if (highlightedMessages.length > 0) {
      const newIndex = (highlightedIndex + 1) % highlightedMessages.length;
      const messageId = highlightedMessages[newIndex];
      const element = document.getElementById(messageId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        setHighlightedIndex(newIndex);

        element.classList.add("highlighted-animation");
        setInterval(() => {
          element.classList.remove("highlighted-animation");
        }, 2000);
      }
    }
  };

  return {
    messagesRes,
    handlePrevious,
    handleNext,
    highlightedMessages,
  };
};
