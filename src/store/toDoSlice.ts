import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { TaskType } from "@/components/types";

interface ToDoState {
  toDoList: TaskType[];
  filter: string;
}

const initialState: ToDoState = {
  toDoList: [],
  filter: "",
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (store, action: PayloadAction<TaskType>) => {
      store.toDoList.push(action.payload);
    },
    deleteToDo: (store, action: PayloadAction<number>) => {
      store.toDoList = store.toDoList.filter((item) => {
        return item.id !== action.payload;
      });
    },
    handleCheck: (store, action: PayloadAction<TaskType>) => {
      store.toDoList = store.toDoList.map((task) => {
        if (task.id === action.payload.id) {
          task.check = !action.payload.check;
        }
        return task;
      });
    },
    handleChangeText: (
      store,
      action: PayloadAction<{ id: number; text: string }>,
    ) => {
      store.toDoList = store.toDoList.map((task) => {
        if (task.id === action.payload.id) {
          task.text = action.payload.text;
        }
        return task;
      });
    },
    setFilter: (store, action: PayloadAction<string>) => {
      store.filter = action.payload;
    },
  },
});

export const { addToDo, deleteToDo, handleCheck, handleChangeText, setFilter } =
  toDoSlice.actions;

export const toDoListSelector = (state: RootState) => state.toDo.toDoList;
export const filterSelector = (state: RootState) => state.toDo.filter;

export default toDoSlice.reducer;
