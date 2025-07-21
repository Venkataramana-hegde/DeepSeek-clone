import LOGO_ICON from "../assets/logo_icon.svg";
import SIDEBAR_OPEN_ICON from "../assets/sidebar_icon.svg";
import SIDEBAR_CLOSE_ICON from "../assets/sidebar_close_icon.svg"
import CHAT_ICON_DULL from "../assets/chat_icon_dull.svg";
import PHONE_ICON_DULL from "../assets/phone_icon_dull.svg";
import PROFILE_ICON from "../assets/profile_icon.svg";
import QRCODE from "../assets/qrcode.png";
import LOGO_TEXT from "../assets/logo_text.svg";
import { useState } from "react";

const Sidebar = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`h-screen transition-all duration-300 bg-[#222327] flex flex-col justify-between ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {isOpen ? (
          <div className="flex items-center justify-between p-4">
            <img src={LOGO_TEXT} alt="logo text" className="h-6"/>
            <img src={SIDEBAR_CLOSE_ICON} alt="side bar close icon" onClick={() => setIsOpen(!isOpen)}/>
          </div>
        ) : (
          <div className="flex flex-col gap-9 items-center justify-center">
        <img src={LOGO_ICON} alt="deepseek logo" className="mt-5 h-11 w-11" />
        <img
          src={SIDEBAR_OPEN_ICON}
          alt="sidebar open icon"
          className="h-7 w-7 hover:bg-gray-700 hover:rounded-sm"
          onClick={() => setIsOpen(!isOpen)}
        />
        <img
          src={CHAT_ICON_DULL}
          alt="dull chat icon "
          className="h-7 w-7 hover:bg-gray-700 hover:rounded-sm"
        />
        
      </div>
        )}
      
      {/* BOTTOM ICONS */}
      <div className="relative flex flex-col items-center gap-8 mb-5">
        {isHovering && (
          <div className="fixed left-1 bottom-28 bg-black rounded shadow-lg z-[9999] border border-gray-600">
            <img
              src={QRCODE}
              alt="qr code"
              className="h-50 w-50"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          </div>
        )}
        <img
          src={PHONE_ICON_DULL}
          alt="dull phone icon"
          className="h-7 w-7 cursor-pointer hover:bg-gray-700 hover:rounded-sm"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
        <img src={PROFILE_ICON} alt="profile icon" className="h-7 w-7" />
      </div>
    </div>
  );
};

export default Sidebar;
