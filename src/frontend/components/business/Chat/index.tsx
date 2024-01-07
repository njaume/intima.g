"use client";
import { useChat } from "ai/react";
import ChatMessagesList from "./ChatMessagesList";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <form className="pb-8 w-full" onSubmit={handleSubmit}>
      <ChatMessagesList messages={messages} />
      <div className="w-full fixed bottom-10 left-0">
     
          <div className="flex gap-5">
            <input
              className="input-ghost-primary input-block input text-black"
              placeholder="Primary"
              value={input}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </div>
     
      </div>
    </form>
  );
}
