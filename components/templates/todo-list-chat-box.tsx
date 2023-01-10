import { useState } from "react";
import { Todo } from "../organisme/todo";
import { DropDown } from "../organisme/drop-down";
import { TodoListDummy } from "../../dummy-data/todo-list-data";

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
      {TodoListDummy.map((value, index) => (
        <Todo key={index} {...value} />
      ))}
    </div>
  );
}
