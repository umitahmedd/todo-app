import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

import React from "react";

const EmptyTodos = () => {
  return (
    <div className="w-full text-center mt-16">
      <ClipboardDocumentListIcon className="w-20  mx-auto text-theme-gray-400 mb-4" />

      <h1 className="text-xl font-bold text-theme-gray-300">
        You don't have tasks registered yet
      </h1>

      <h1 className="text-xl font-medium text-theme-gray-300">
        Create tasks and organize your to-do items
      </h1>
    </div>
  );
};

export default EmptyTodos;
