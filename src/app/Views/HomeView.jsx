"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "@/app/Components/common/CustomButton";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import ListItem from "../Components/common/ListItem";

const HomeView = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const stringTodos = localStorage.getItem("todos");
    const todos = JSON.parse(stringTodos);

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative -top-6">
      <form
        className="flex items-center justify-center gap-2"
        onSubmit={handleFormSubmit}
      >
        {/* Form */}
        <input
          className="w-full rounded-md p-3 outline-none border border-theme-gray-700 bg-theme-gray-500 text-theme-gray-300"
          type="text"
          placeholder="Add a new task"
        />

        <CustomButton buttonType={"addButton"} roundSize={2}>
          Add
        </CustomButton>
      </form>

      <div className="flex items-center justify-between gap-2 mt-6  ">
        <div className="flex items-end justify-center gap-2">
          <h1 className="text-lg font-bold text-theme-blue-normal">
            All Todos
          </h1>

          <p className="bg-theme-gray-500 w-8 h-8 text-white rounded-full p-2 font-bold flex items-center justify-center">
            {todos.length}
          </p>
        </div>

        <div className="flex items-end justify-center gap-2">
          <h1 className="text-lg font-bold text-theme-purple-normal">
            Completed
          </h1>

          <p className="bg-theme-gray-500 w-8 h-8 text-white rounded-full p-2 font-bold flex items-center justify-center">
            {todos.length}
          </p>
        </div>
      </div>

      {!todos.length && (
        <div className="w-full text-center mt-16">
          <ClipboardDocumentListIcon className="w-20  mx-auto text-theme-gray-400 mb-4" />

          <h1 className="text-xl font-bold text-theme-gray-300">
            You don't have tasks registered yet
          </h1>

          <h1 className="text-xl font-medium text-theme-gray-300">
            Create tasks and organize your to-do items
          </h1>
        </div>
      )}

      {todos &&
        todos.map((task) => {
          <ListItem task={task} />;
        })}
    </div>
  );
};

export default HomeView;
