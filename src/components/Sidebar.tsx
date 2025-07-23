import LOGO_ICON from "../assets/logo_icon.svg";
import SIDEBAR_OPEN_ICON from "../assets/sidebar_icon.svg";
import SIDEBAR_CLOSE_ICON from "../assets/sidebar_close_icon.svg";
import CHAT_ICON_DULL from "../assets/chat_icon_dull.svg";
import PHONE_ICON_DULL from "../assets/phone_icon_dull.svg";
import PROFILE_ICON from "../assets/profile_icon.svg";
import QRCODE from "../assets/qrcode.png";
import LOGO_TEXT from "../assets/logo_text.svg";
import CHAT_ICON from "../assets/chat_icon.svg";
import NEW_ICON from "../assets/new_icon.svg";
import MENU_ICON from "../assets/menu_icon.svg";
import { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Sidebar = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Mobile Menu Button - Only visible on small/medium screens */}
      {!isOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#222327] rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={MENU_ICON} alt="menu icon" className="h-6 w-6" />
        </button>
      )}

      {/* Backdrop for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`h-screen transition-all duration-300 bg-[#222327] flex flex-col justify-between
      ${isOpen ? "w-64" : "w-16"}
      ${isOpen ? "fixed md:relative left-0 z-40" : "relative"}
      ${!isOpen && "hidden md:flex"} 
    `}
      >
        {/* Hamburger Menu */}

        {isOpen ? (
          <div>
            <div className="flex items-center justify-between pt-5 px-3 ml-2">
              <img src={LOGO_TEXT} alt="logo text" className="h-6" />
              <img
                src={SIDEBAR_CLOSE_ICON}
                alt="side bar close icon"
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              />
            </div>
            <div className="mt-7 ml-4">
              <button className="bg-[#4c6cfe] flex items-center justify-between gap-2 px-2 py-2 text-white rounded-xl">
                <img src={CHAT_ICON} alt="chat icon" className="w-6" />
                <span>New chat</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-9 items-center justify-center">
            <img
              src={LOGO_ICON}
              alt="deepseek logo"
              className="mt-5 h-11 w-11"
            />
            <img
              src={SIDEBAR_OPEN_ICON}
              alt="sidebar open icon"
              className="h-7 w-7 hover:bg-gray-700 hover:rounded-sm cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
            <img
              src={CHAT_ICON_DULL}
              alt="dull chat icon "
              className="h-7 w-7 hover:bg-gray-700 hover:rounded-sm cursor-pointer"
            />
          </div>
        )}

        {/* BOTTOM ICONS */}
        <div className="relative flex flex-col items-center gap-8 mb-5">
          {isHovering && (
            <div
              className={`fixed bottom-28 bg-black rounded shadow-lg z-[9999] border border-gray-600 ${
                isOpen ? "left-5" : "left-1"
              }`}
            >
              <img
                src={QRCODE}
                alt="qr code"
                className="h-50 w-50"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              />
            </div>
          )}
          {isOpen ? (
            <div>
              <button
                className="flex items-center gap-2 border border-blue-500 pr-24 pl-2 py-1 rounded-lg"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <img
                  src={PHONE_ICON_DULL}
                  alt="dull phone icon"
                  className="h-7 w-5 cursor-pointer hover:bg-gray-700 hover:rounded-sm "
                />
                <span className="text-white">Get App</span>
                <img src={NEW_ICON} alt="new icon" />
              </button>
            </div>
          ) : (
            <div>
              <img
                src={PHONE_ICON_DULL}
                alt="dull phone icon"
                className="h-7 w-7 cursor-pointer hover:bg-gray-700 hover:rounded-sm"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              />
            </div>
          )}
          <SignedOut>
            <SignInButton>
              {isOpen ? (
                <button className="flex items-center gap-2 pr-24 rounded-lg">
                  <img
                    src={PROFILE_ICON}
                    alt="profile icon"
                    className="h-7 w-7"
                  />
                  <span className="text-white">My profile</span>
                </button>
              ) : (
                <img
                  src={PROFILE_ICON}
                  alt="profile icon"
                  className="h-7 w-7"
                />
              )}
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
