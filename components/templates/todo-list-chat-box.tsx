import { useState } from "react";
import { Todo } from "../organisme/Todo";
import { DropDown } from "../organisme/drop-down";

export const listItem = ["Personal Errands", "Urgent To-Do"];

export function TodoListTempelates() {
  const [selectedDropDown, setSelectedDropDown] = useState(listItem[0]);
  return (
    <div className="h-[737px] w-[747px] card bg-white py-6 px-8 space-y-[22px]">
      <div className="flex justify-between">
        <DropDown
          listItem={listItem}
          onOptionClick={setSelectedDropDown}
          selectedIndex={listItem.findIndex((value) => value == selectedDropDown) ?? 0}
        />
        <button className="bg-[#2F80ED] px-4 py-3 rounded-lg text-white font-bold">New task</button>
      </div>

      <Todo
        content="Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!"
        date={"2021-06-12"}
        daysLeft="4 Days Left"
        title="Close off Case #012920- RODRIGUES, Amiguel"
      />
    </div>
  );
}
