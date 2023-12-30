import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    completeTask: (state, action) => {
      state.tasks.forEach((task) => {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      });

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    getTasksFromLocalStorage: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, deleteTask, completeTask, getTasksFromLocalStorage } =
  projectSlice.actions;

export default projectSlice.reducer;
