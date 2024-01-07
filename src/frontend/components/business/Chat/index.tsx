"use client";
//import { useChat } from "ai/react";
import ChatMessagesList from "./ChatMessagesList";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const MESSAGE_LIST = [
  {
    "id": "chapter_1",
    "title": "The Mysterious Forest",
    "content": "As the sun dipped below the horizon, a group of adventurers found themselves standing at the edge of the mysterious forest. The air was thick with an otherworldly energy, and the trees whispered secrets of ancient times.",
    "role": "narrator",
    "options": ["Continue into the forest", "Set up camp for the night"]
  }
]
export default function Chat() {
  //const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <form className="pb-8 w-full h-screen" /* onSubmit={handleSubmit} */>
      <ChatMessagesList messages={MESSAGE_LIST} />
      <div className="w-full fixed bottom-10 left-0 px-10">
          <div className="flex gap-5">
            <Input
              className="input-ghost-primary input-block input text-white"
              placeholder="Primary"
              //value={input}
             // onChange={handleInputChange}
            />
            <Button className="btn btn-primary" type="submit">
              Send
            </Button>
          </div>
     
      </div>
    </form>
  );
}
