import { useState } from "react";
import BluePencil from "../atom/icon/blue-pencil";
import { MdExpandLess } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

const listItem = ["Personal Errands", "Urgent To-Do"];

export function TodoListTempelates() {
  const [selectedDropDown, setSelectedDropDown] = useState(listItem[0]);
  return (
    <div className="h-[737px] w-[747px] card bg-white py-6 px-8 space-y-[22px]">
      <DropDown
        listItem={listItem}
        onOptionClick={setSelectedDropDown}
        selectedIndex={listItem.findIndex((value) => value == selectedDropDown) ?? 0}
      />
      <Todo
        content="Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!"
        date={"2021-06-12"}
        daysLeft="4 Days Left"
        title="Close off Case #012920- RODRIGUES, Amiguel"
      />
    </div>
  );
}

interface IPropsTodo {
  title: string;
  date: string;
  daysLeft: string;
  content: string;
  isClear?: boolean;
}

function Todo(props: IPropsTodo) {
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

interface IDropDownProps {
  listItem: string[];
  selectedIndex: number;
  onOptionClick: (key: string) => void;
}

function DropDown(props: IDropDownProps) {
  return (
    <select className="select select-bordered w-full max-w-xs">
      <option disabled selected>
        {props.listItem[props.selectedIndex]}
      </option>
      {listItem.map((value) => (
        <option key={value}>
          <div className="p-3 text-sm h-[40px]">{value}</div>
        </option>
      ))}
    </select>
  );
}
