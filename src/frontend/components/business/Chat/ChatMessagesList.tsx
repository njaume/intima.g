import ChatMessage from "./ChatMessage";
interface IMessage {
  id: string,
  title: string,
  content: string,
  role: string,
  options?: string[]
}

const ChatMessagesList = ({ messages }: { messages: IMessage[] }) => {
  return messages.map((message) => <ChatMessage key={message?.id} message={message} />);
};

export default ChatMessagesList;
