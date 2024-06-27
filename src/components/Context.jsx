import React, { useState } from "react";

const TasksContext = React.createContext([]);
const SetTasksContext = React.createContext(() => {});
export const useTasks = () => {
  const tasksState = React.useContext(TasksContext);
  if (!tasksState) {
    throw new Error("you cant use the useTasks hook outside the TasksContext");
  }
  return tasksState;
};

export const useSetTasks = () => {
  const tasksSetState = React.useContext(SetTasksContext);
  if (!tasksSetState) {
    throw new Error(
      "you cant use the useSetTasks hook outside the SetTasksContext",
    );
  }
  return tasksSetState;
};

export const Provider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  return (
    <TasksContext.Provider value={tasks}>
      <SetTasksContext.Provider value={setTasks}>
        {children}
      </SetTasksContext.Provider>
    </TasksContext.Provider>
  );
};

const FilterContext = React.createContext("");
const SetFilterContext = React.createContext(() => {});

export const useSearch = () => React.useContext(FilterContext);
export const useSetSearch = () => React.useContext(SetFilterContext);

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  return (
    <FilterContext.Provider value={search}>
      <SetFilterContext.Provider value={setSearch}>
        {children}
      </SetFilterContext.Provider>
    </FilterContext.Provider>
  );
};
