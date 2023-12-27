import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

const ListItem = ({ task }) => {
  return (
    <div className="flex items-start justify-between rounded-md p-6 bg-theme-gray-500 text-white gap-3">
      <div className="flex items-start justify-start gap-3">
        <button className="rounded-full w-5 h-5 border-2 border-theme-blue-normal"></button>

        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
      </div>

      <button>
        <TrashIcon className="w-5 h-5 text-theme-gray-200" />
      </button>
    </div>
  );
};

export default ListItem;
