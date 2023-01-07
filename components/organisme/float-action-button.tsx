import { useCallback, useState } from "react";
import { QuickBlue } from "../atom/icon/quick-blue";
import { ChatPurple } from "../atom/icon/chat-purple";
import { TodoGrey } from "../atom/icon/todo-grey";

export function FloatActionButton() {
  const [showAll, setShowAll] = useState(false);
  const onQuickBlueClick = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);
  return (
    <div className="flex flex-row space-x-[26px] justify-end">
      {showAll ? (
        <>
          <button className="flex flex-col space-y-[12px]">
            <p className="text-center w-full text-white">Task</p>
            <TodoGrey />
          </button>
          <button className="flex flex-col space-y-[12px]">
            <p className="text-center w-full text-white">Inbox</p>
            <ChatPurple />
          </button>
        </>
      ) : (
        <></>
      )}
      <button className="flex flex-col space-y-[12px]" onClick={onQuickBlueClick}>
        <div className="min-h-[24px]"> </div>
        <QuickBlue />
      </button>
    </div>
  );
}
