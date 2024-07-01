import { FaPaperPlane } from "react-icons/fa";
import postMessages from "../services/postMessage";
import React, { useState } from "react";
import MessagesI from "../types/messageTypes";

interface SendBoxProps {
  addNewMessage: (message: MessagesI) => void;
}

export default function SendBox({ addNewMessage }: SendBoxProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (message.trim()) {
      const postResponse = await postMessages(message);
      addNewMessage(postResponse[postResponse.length - 1])
      setMessage("");

    }
  };

  return (
    <div className="rounded-full w-full border-2 border-slate-200 dark:border-slate-700 p-3 flex justify-between items-center">
      <form method="POST" className="w-full flex justify-between items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          name="messageText"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="bg-transparent outline-none p-2 w-4/5 dark:text-white"
        />
        <button type="submit" className="rounded-full p-4 bg-slate-200 dark:bg-slate-600 dark:text-slate-200">
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
}

