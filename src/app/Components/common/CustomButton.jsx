import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const CustomButton = ({ action, buttonType, roundSize, children }) => {
  return (
    <button
      className={`bg-theme-blue-normal hover:bg-theme-blue-dark px-4 py-3 text-white transition-all flex items-center justify-center gap-2  ${
        buttonType === "white"
          ? "bg-white !text-blue-600 !hover:text-blue-500"
          : ""
      } ${
        roundSize === 1
          ? "rounded-sm"
          : roundSize === 2
          ? "rounded-md"
          : roundSize === 3
          ? "rounded-lg"
          : roundSize === 4
          ? "rounded-xl"
          : ""
      }`}
      onClick={action}
    >
      {children}

      {buttonType === "addButton" && (
        <PlusCircleIcon className="w-5 h-5 text-white" />
      )}
    </button>
  );
};

export default CustomButton;
