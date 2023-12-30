"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "@/app/Components/common/CustomButton";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import ListItem from "../Components/common/ListItem";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addTask,
  getTasksFromLocalStorage,
} from "@/store/features/counter/projectSlice";
import EmptyTodos from "../Components/alert/EmptyTodos";

const HomeView = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const [completedTasksCount, setcompletedTasksCount] = useState(0);
  const tasks = useAppSelector((state) => state.project.tasks);

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
      dispatch(getTasksFromLocalStorage(localStorageTasks));
    }
  }, []);

  // Calculate completed tasks
  useEffect(() => {
    let completedTasks = tasks.filter((task) => task.completed === true);
    setcompletedTasksCount(completedTasks.length);
  }, [tasks]);

  // Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputValue) {
      dispatch(
        addTask({ id: tasks.length + 1, text: inputValue, completed: false })
      );
    }

    // Refresh Input value
    setInputValue("");
  };

  return (
    <div className="relative -top-6">
      <form
        className="flex items-center justify-center gap-2"
        onSubmit={handleFormSubmit}
      >
        {/* Form */}
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className="w-full rounded-md p-3 outline-none border border-theme-gray-700 bg-theme-gray-500 text-theme-gray-200"
          type="text"
          placeholder="Add a new task"
        />

        <CustomButton type="submit" buttonType={"addButton"} roundSize={2}>
          Add
        </CustomButton>
      </form>

      <div className="flex items-center justify-between gap-2 mt-6  ">
        <div className="flex items-end justify-center gap-2">
          <h1 className="text-lg font-bold text-theme-blue-normal">
            All Todos
          </h1>

          <p className="bg-theme-gray-500 w-8 h-8 text-white rounded-full p-2 font-bold flex items-center justify-center">
            {tasks && tasks.length}
          </p>
        </div>

        <div className="flex items-end justify-center gap-2">
          <h1 className="text-lg font-bold text-theme-purple-normal">
            Completed
          </h1>

          <p className="bg-theme-gray-500 w-8 h-8 text-white rounded-full p-2 font-bold flex items-center justify-center">
            {completedTasksCount}
          </p>
        </div>
      </div>

      {/* Tasks */}
      {tasks && tasks.length === 0 ? (
        <EmptyTodos />
      ) : (
        tasks &&
        tasks
          .slice()
          .reverse()
          .map((index, task) => (
            <div key={task} className="mt-3">
              <ListItem task={index} />
            </div>
          ))
      )}
    </div>
  );
};

export default HomeView;
