import LOGO_ICON from "../assets/logo_icon.svg";
import ChatInput from "./ChatInput";

const ChatWindow = () => {
  return (
    <div
      style={{ backgroundColor: "#2a2b2f" }}
      className="flex-1 overflow-y-auto"
    >
      <div className="text-white flex flex-col items-center justify-center h-screen px-4 py-8 w-full">
        <div className="flex items-center justify-center gap-2 mb-2 ">
          <img src={LOGO_ICON} alt="deepseek logo" className="h-15 w-15" />
          <p className="text-2xl font-bold">Hi, I'm DeepSeek.</p>
        </div>
        <p className="pb-2 font-xs">How can I help you today?</p>
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatWindow;
