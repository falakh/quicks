import { useTaskButtonStore } from "../../store/task-button-store";
import { TodoOrange } from "../atom/icon/todo-orange";
import { TodoGrey } from "../atom/icon/todo-grey";
import { useMessageButtonStore } from "../../store/message-button-store";

export function TaskFloatActionButton() {
  const { isActive, setIsActive, disableTaskButtonStore } = useTaskButtonStore();
  const { disableMessageButtonStore } = useMessageButtonStore();

  return isActive ? (
    <button onClick={disableTaskButtonStore} className="flex flex-col space-y-[12px]">
      <p className="text-center w-full text-white">Inbox</p>
      <TodoOrange />
    </button>
  ) : (
    <button
      onClick={() => {
        setIsActive();
        disableMessageButtonStore();
      }}
      className="flex flex-col space-y-[12px]"
    >
      <p className="text-center w-full text-white">Inbox</p>
      <TodoGrey />
    </button>
  );
}
