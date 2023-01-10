import { useState } from "react";
import BluePencil from "../atom/icon/blue-pencil";
import { MdExpandLess } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

export interface IPropsTodo {
  title: string;
  date: string;
  daysLeft: string;
  content: string;
  isClear?: boolean;
}

export function Todo(props: IPropsTodo) {
  const [isClear, setIsClear] = useState(props.isClear);
  const [selectedDate, setSelectedDate] = useState(props.date);
  const [isShowMore, setShowmore] = useState(false);
  return (
    <div className="flex flex-row space-x-6 align-baseline w-full border-b border=[#828282] py-5">
      <div className="flex flex-row">
        <div className="form-control">
          <input
            type="checkbox"
            onChange={() => setIsClear((prev) => !prev)}
            checked={isClear}
            className="border-[#828282] checkbox border-2"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-[12px] w-full">
        <div className="flex flex-row w-full space-x-2">
          <p className="grow">{props.title}</p>
          <p className="grow-0 text-red-primary">{props.daysLeft}</p>
          <p className="grow-0">{props.date}</p>
        </div>
        {isShowMore && (
          <>
            <div className="flex flex-row items-center space-x-4">
              {selectedDate && <AiOutlineClockCircle width={17} height={17} color={"#2F80ED"} />}
              <input
                value={selectedDate}
                onChange={(event) => setSelectedDate(event.target.value)}
                className="w-[193px] border border-[#828282] rounded-md p-3"
                type={"date"}
              />
            </div>
            <div className="flex flex-row items-center space-x-4">
              {<BluePencil />}
              <p>{props.content}</p>
            </div>
          </>
        )}
      </div>
      <div onClick={() => setShowmore((prev) => !prev)} className="pt-[5px]">
        <MdExpandLess className="items-center" />
      </div>
    </div>
  );
}
