import ChatMessage from "./ChatMessage";

const ChatMessagesList = ({ messages }: { messages: any[] }) => {
  return messages.map((message) => <ChatMessage key={message?.id} message={message} />);
};

export default ChatMessagesList;
