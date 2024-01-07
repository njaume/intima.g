const ChatMessage = ({ message }: { message: any }) => {
  return (
    <div
      className={`w-full gap-5 flex ${
        message.role === "user" ? "justify-start" : "flex-row-reverse "
      }`}
    >
      <div className="avatar avatar-ring-error">
        <img
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          alt="avatar"
        />
      </div>
      <div className="card">
        <div className="card-body">{message?.content}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
