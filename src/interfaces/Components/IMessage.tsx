export interface IMessageProps {
  user: string;
  message: IMessage;
}

interface IMessage {
  message: string | null;
  timestamp: number | string;
}