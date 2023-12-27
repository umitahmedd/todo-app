import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const CustomButton = ({ action, buttonType, roundSize, children }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 px-4 py-3 text-white transition-all flex items-center justify-center gap-2  ${
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
      {buttonType === "addButton" && (
        <PlusIcon className="w-5 h-5 text-white" />
      )}

      {children}
    </button>
  );
};

export default CustomButton;
