import { ChatGrey } from "../atom/icon/chat-grey";
import { ChatPurple } from "../atom/icon/chat-purple";

export function ChatActiveGrey() {
  return (
    <div className="stack">
      <div className="ml-8">
        <ChatPurple />
      </div>
      <div className=" place-content-center min-h-[72px]">
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M68 34C68 52.7777 52.7777 68 34 68C15.2223 68 0 52.7777 0 34C0 15.2223 15.2223 0 34 0C52.7777 0 68 15.2223 68 34Z"
            fill="#4F4F4F"
          />
        </svg>
      </div>
    </div>
  );
}
