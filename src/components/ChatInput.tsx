import { type ChangeEvent, useState } from "react";
import DEEP_THINK_ICON from "../assets/deepthink_icon.svg";
import SEARCH_ICON from "../assets/search_icon.svg";
import ARROW_DULL_ICON from "../assets/arrow_icon_dull.svg";
import PIN_ICON from "../assets/pin_icon.svg";

const ChatInput = () => {
  const [value, setValue] = useState("");

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div
      style={{ backgroundColor: "#414045" }}
      className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden"
    >
      <textarea
        value={value}
        onInput={handleInput}
        placeholder="Message DeepSeek"
        className="w-full bg-transparent resize-none p-4 text-white placeholder:text-gray-400 outline-none max-h-48"
        rows={1}
      />
      <div className="flex items-center justify-between mx-2 pb-2">
        <div className="flex text-xs gap-3">
          <button className="flex gap-1 items-center justify-center border border-gray-500 cursor-pointer rounded-2xl p-1">
            <img src={DEEP_THINK_ICON} alt="deep think icon" />
            DeepThink(R1)
          </button>
          <button className="flex gap-1 items-center justify-center border border-gray-500 cursor-pointer rounded-2xl p-1">
            <img src={SEARCH_ICON} alt="search icon" />
            Search
          </button>
        </div>
        <div className="flex gap-3">
          <button className="flex gap-1 items-center justify-center cursor-pointer">
            <img src={PIN_ICON} alt="pin icon" className="h-6 w-6" />
          </button>
          <button className="flex gap-1 items-center justify-center cursor-pointer bg-gray-400 rounded-full p-2">
            <img src={ARROW_DULL_ICON} alt="send icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
