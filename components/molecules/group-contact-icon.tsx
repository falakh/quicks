import ContactIcon from "../atom/icon/white-contact";

export function ContactGroupIcon() {
  return (
    <div className="stack">
      <div className="ml-4 w-[34px] h-[34px] bg-[#2F80ED] rounded-full p-[11px]">
        <ContactIcon height={11} width={11} color="white" />
      </div>
      <div className="items-center w-[34px] h-[34px] bg-[#E0E0E0] rounded-full p-[11px]">
        <ContactIcon height={11} width={11} color="#4F4F4F" />
      </div>
    </div>
  );
}
