import { listItem } from "../templates/todo-list-chat-box";

interface IDropDownProps {
  listItem: string[];
  selectedIndex: number;
  onOptionClick: (key: string) => void;
}
export function DropDown(props: IDropDownProps) {
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
