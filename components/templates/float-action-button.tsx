import { useCallback, useState } from "react";
import { QuickBlue } from "../atom/icon/quick-blue";
import { TodoGrey } from "../atom/icon/todo-grey";
import { ChatFloatActionButton } from "../organisme/chat-float-action-button";
import { useMessageButtonStore } from "../../store/message-button-store";
import { TaskFloatActionButton } from "../organisme/task-float-action-button";
import { useTaskButtonStore } from "../../store/task-button-store";

export function FloatActionButton() {
  const [showAll, setShowAll] = useState(false);
  const onQuickBlueClick = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);
  const isActive = useMessageButtonStore((state) => state.isActive);
  const isTaskButtonActive = useTaskButtonStore((state) => state.isActive);

  return (
    <div className="flex flex-row space-x-[26px] justify-end">
      {showAll ? (
        <>
          <TaskFloatActionButton />
          <ChatFloatActionButton />
        </>
      ) : (
        <></>
      )}
      {!isActive && !isTaskButtonActive && (
        <button className="flex flex-col space-y-[12px]" onClick={onQuickBlueClick}>
          <div className="min-h-[24px]"> </div>
          <QuickBlue />
        </button>
      )}
    </div>
  );
}
