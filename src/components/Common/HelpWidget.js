"use client";
import Link from "next/link";
import React, { useState } from "react";
const CommentIcon = () => {
  return (
    <svg
      height="20px"
      width="20px"
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <style
          type="text/css"
          dangerouslySetInnerHTML={{ __html: " .st0{fill:#ffffff;} " }}
        />
        <g>
          <path
            className="st0"
            d="M92.574,294.24V124.336H43.277C19.449,124.336,0,144.213,0,168.467v206.44 c0,24.254,19.449,44.133,43.277,44.133h62v45.469c0,3.041,1.824,5.777,4.559,6.932c2.736,1.154,5.957,0.486,8.023-1.641 l49.844-50.76h106.494c23.828,0,43.279-19.879,43.279-44.133v-0.061H172.262C128.314,374.846,92.574,338.676,92.574,294.24z"
          />
          <path
            className="st0"
            d="M462.717,40H172.26c-27.105,0-49.283,22.59-49.283,50.197v204.037c0,27.61,22.178,50.199,49.283,50.199 h164.668l75.348,76.033c2.399,2.442,6.004,3.172,9.135,1.852c3.133-1.322,5.176-4.434,5.176-7.887v-69.998h36.131 c27.106,0,49.283-22.59,49.283-50.199V90.197C512,62.59,489.822,40,462.717,40z M369.156,280.115H195.92v-24.316h173.236V280.115z M439.058,204.129H195.92v-24.314h243.138V204.129z M439.058,128.143H195.92v-24.315h243.138V128.143z"
          />
        </g>
      </g>
    </svg>
  );
};
const CloseIcon = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="Menu / Close_SM">
          {" "}
          <path
            id="Vector"
            d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export const isMobileView = () => {
  if (typeof window !== "undefined") {
    return window?.innerWidth <= 768;
  }
};

const HelpWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = isMobileView();
  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Toggle Button */}
      {/* <button
        className={`${
          isOpen ? "bg-red-600" : "bg-red-500"
        } text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-all relative z-20`}
        onClick={toggleWidget}
      > */}
      <button
        className={`${
          isOpen ? "bg-[#4f4d46]" : "bg-[#4f4d46]"
        } text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-[#3f3d36] transition-all relative z-20`}
        onClick={toggleWidget}
      >
        {isOpen ? <CloseIcon className="stroke-white" /> : <CommentIcon />}
      </button>

      {/* Widget Content */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white w-64 rounded-lg shadow-lg p-4 z-10">
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-2 mb-3">
            <h3 className="text-[#4f4d46] text-sm font-bold mb-0 ">
              Need help? Contact us!
            </h3>
            <button
              // className="text-gray-500 hover:text-gray-700"
              onClick={toggleWidget}
            >
              <CloseIcon className="stroke-[#4f4d46]" />
            </button>
          </div>

          {/* Contact List */}
          <ul className="space-y-3 p-0">
            <li>
              <Link
                href={
                  !isMobile
                    ? `https://web.whatsapp.com/send?phone=919512900028`
                    : `https://api.whatsapp.com/send?phone=919512900028`
                }
                className="flex items-center space-x-3 no-underline text-black-rock-Black"
              >
                <img
                  src="https://img.icons8.com/color/48/whatsapp.png"
                  alt="Whatsapp"
                  className="w-8 h-8"
                />
                <div>
                  <span className="font-bold text-sm">Whatsapp</span>
                  <p className="text-xs text-gray-600 mb-0">Just Click</p>
                </div>
              </Link>
            </li>
            {/* <li className="flex items-center space-x-3">
              <img
                src="https://img.icons8.com/color/48/facebook-messenger.png"
                alt="Messenger"
                className="w-8 h-8"
              />
              <div>
                <span className="font-bold text-sm">Messenger</span>
                <p className="text-xs text-gray-600 mb-0">
                  Send Message directly
                </p>
              </div>
            </li> */}
            <li >
              <Link
                href="mailto:info@blackrockporcelano.com"
                className="flex items-center space-x-3 text-black-rock-Black no-underline"
                title="Email"
           
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/email.png"
                  alt="Email"
                  className="w-8 h-8"
                />
                <div>
                  <span className="font-bold text-sm">Email us</span>
                  <p className="text-xs text-gray-600 mb-0">
                    Send email directly
                  </p>
                </div>
              </Link>
            </li>
            {/* <li className="flex items-center space-x-3">
              <img
                src="https://img.icons8.com/color/48/phone.png"
                alt="Callback"
                className="w-8 h-8"
              />
              <div>
                <span className="font-bold text-sm">Callback request</span>
                <p className="text-xs text-gray-600 mb-0">
                  We call you back ASAP
                </p>
              </div>
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HelpWidget;
