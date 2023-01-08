import React from "react";
import { FloatActionButton } from "../components/templates/float-action-button";
import { ChatListTempelates } from "../components/templates/chat-list-tempelates";
import { useMessageButtonStore } from "../store/message-button-store";
import { TodoListTempelates } from "../components/templates/todo-list-chat-box";
import { useTaskButtonStore } from "../store/task-button-store";
export default function Home() {
  const isMessageButtonActive = useMessageButtonStore((state) => state.isActive);
  const isTaskButtonActive = useTaskButtonStore((state) => state.isActive);

  return (
    <>
      <div className="min-h-screen ">
        <div className=" absolute right-0 bottom-0 mr-9 mb-7 ">
          {isMessageButtonActive ? <ChatListTempelates /> : <></>}
          {isTaskButtonActive ? <TodoListTempelates /> : <></>}
          <FloatActionButton />
        </div>
      </div>
    </>
  );
}
