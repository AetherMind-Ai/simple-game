import React from "react";
import { TbMessageChatbot } from "react-icons/tb"; // Chatbot with face

const Loading = () => {
  return (
    <section className="h-full w-full grid place-content-center">
      <div className="flex items-center justify-center gap-3 text-8xl">
        <TbMessageChatbot />
      </div>
      <div className="loader" />
    </section>
  );
};

export default Loading;
