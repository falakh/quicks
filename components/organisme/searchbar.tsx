import { SearchIcon } from "../atom/icon/search-icon";

export function Searchbar() {
  return (
    <div className="py-[14px] px-[86px] w-full border border-grey3 rounded-md flex flex-row items-baseline">
      <input type="text" placeholder="Search " className=" border-none focus:border-none w-full focus:outline-none" />
      <SearchIcon />
    </div>
  );
}
