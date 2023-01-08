import { ChatGrey } from "../atom/icon/chat-grey";
import { ChatActiveGrey } from "../molecules/chat-active-icon";
import { useMessageButtonStore } from "../../store/message-button-store";

export function ChatFloatActionButton() {
  const { isActive, setIsActive, disableMessageButtonStore: disableMessageButtonStore } = useMessageButtonStore();

  return !isActive ? (
    <button onClick={setIsActive} className="flex flex-col space-y-[12px]">
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
