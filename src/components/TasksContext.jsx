import { createContext, useContext, useState } from "react";
import { useContextError } from "src/components/useContextError.js";

const TasksContext = createContext([]);
const SetTasksContext = createContext(() => {});
export const useTasks = () => {
  const tasksState = useContext(TasksContext);
  useContextError(
    tasksState,
    "you cant use the useTasks hook outside the TasksContext",
  );
  return tasksState;
};

export const useSetTasks = () => {
  const tasksSetState = useContext(SetTasksContext);
  useContextError(
    tasksSetState,
    "you cant use the useSetTasks hook outside the SetTasksContext",
  );
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
