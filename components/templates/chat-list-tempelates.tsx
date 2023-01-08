import { useEffect } from "react";
import { useMessageButtonStore } from "../../store/message-button-store";
import { ContactGroupIcon } from "../molecules/group-contact-icon";
import { Searchbar } from "../organisme/searchbar";
import Image from "next/image";
import { LoadingIndicator } from "../organisme/loading-indicator";
export function ChatListTempelates() {
  const { message, requestMessage, isMessageRequestLoading } = useMessageButtonStore();

  useEffect(() => {
    requestMessage();
  }, [requestMessage]);

  return (
    <div className="min-h-[737px] min-w-[747px] card bg-white py-6 px-8 space-y-[22px] ">
      <Searchbar />
      {isMessageRequestLoading ? (
        <div style={{ margin: "auto" }} className="w-full h-full text-center align-middle m-auto">
          <LoadingIndicator />
        </div>
      ) : (
        message.map((value, index) => (
          <div
            key={value.id}
            className={`flex flex-col ${index !== message.length - 1 ? "border-b border-grey3" : ""}`}
          >
            <div className="flex flex-row space-x-4 items-start">
              {value.isGroup ? (
                <ContactGroupIcon />
              ) : (
                <Image alt={value.title} src={value.image} width={50} height={34} />
              )}
              <div className="flex flex-col">
                <div className="flex-row flex space-x-4 text-base font-medium">
                  <p className="text-blue-primary">{value.title}</p>
                  <p className="text-gray-text">{value.time}</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">{value.message[value.message.length - 1].from + " :"}</p>
                  <p>{value.message[value.message.length - 1].value}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
