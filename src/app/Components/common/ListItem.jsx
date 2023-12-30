import React from "react";
import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  deleteTask,
  completeTask,
} from "@/store/features/counter/projectSlice";

const ListItem = ({ task }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-start justify-between rounded-md p-6 bg-theme-gray-500 text-white gap-3">
      <div className="flex items-start justify-start gap-3">
        <button
          onClick={() => dispatch(completeTask(task.id))}
          className={` rounded-full w-5 h-5 border-2 flex items-center justify-center border-theme-blue-normal flex-shrink-0
          ${
            task.completed === true
              ? "!bg-theme-blue-normal"
              : "!bg-transparent"
          }`}
        >
          {task.completed && (
            <CheckIcon className="w-5 h-5 text-white font-bold " />
          )}
        </button>

        <p
          className={`
          ${
            task.completed === true ? "line-through text-theme-gray-300" : ""
          } `}
        >
          {task.text}
        </p>
      </div>

      <button onClick={() => dispatch(deleteTask(task.id))}>
        <TrashIcon className="w-5 h-5 text-theme-gray-200" />
      </button>
    </div>
  );
};

export default ListItem;
