import { Grid } from "@mui/material";
import { useCallback } from "react";
import ToDoItem from "src/components/ToDoItem.jsx";
import { useSetTasks, useTasks } from "src/components/TasksContext.jsx";
import { useSearch } from "src/components/FilterContext";

const ToDoList = ({ children }) => {
  const tasks = useTasks();
  const setTasks = useSetTasks();
  const search = useSearch();

  const handleChange = (e) => {
    const updatedList = tasks.map((task) => {
      if (task.id === e.id) {
        task.check = !e.check;
      }
      return task;
    });
    setTasks(updatedList);
  };

  const deleteTodo = (key) => {
    const updateTodo = tasks.filter((item) => {
      return item.id !== key;
    });
    setTasks(updateTodo);
  };

  const handleUpdateText = (id, text) => {
    const updatedList = tasks.map((task) => {
      if (task.id === id) {
        task.text = text;
      }
      return task;
    });
    setTasks(updatedList);
  };

  const filteredTasks = useCallback(
    () =>
      tasks.filter((task) =>
        task.text.toLowerCase().includes(search.toLowerCase()),
      ),
    [tasks, search],
  );

  return (
    <Grid container direction="column" gap={5}>
      {children}
      {filteredTasks().map((task) => (
        <ToDoItem
          task={task}
          key={task.id}
          onClickDelete={() => {
            deleteTodo(task.id);
          }}
          onClickIconSave={handleUpdateText}
          isCheck={task.check}
          handleChange={handleChange}
        />
      ))}
    </Grid>
  );
};

export default ToDoList;
