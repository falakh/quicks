import { ChatGrey } from "../atom/icon/chat-grey";
import { ChatActiveGrey } from "../molecules/chat-active-icon";
import { useMessageButtonStore } from "../../store/message-button-store";
import { useTaskButtonStore } from "../../store/task-button-store";

export function ChatFloatActionButton() {
  const { isActive, setIsActive, disableMessageButtonStore: disableMessageButtonStore } = useMessageButtonStore();
  const { disableTaskButtonStore } = useTaskButtonStore();

  return !isActive ? (
    <button
      onClick={() => {
        setIsActive();
        disableTaskButtonStore();
      }}
      className="flex flex-col space-y-[12px]"
    >
      <p className="text-center w-full text-white">Inbox</p>
      <ChatGrey />
    </button>
  ) : (
    <button onClick={disableMessageButtonStore} className="flex flex-col space-y-[12px]">
      <p className="text-center w-full text-white">Inbox</p>
      <ChatActiveGrey />
    </button>
  );
}
