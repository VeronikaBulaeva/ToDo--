import { Grid, Typography } from "@mui/material";
import React from "react";
import ToDoItem from "src/components/ToDoItem.jsx";
import { useSearch, useSetTasks, useTasks } from "src/components/Context.jsx";

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
    const updateTodo = tasks.filter((item, index) => {
      return index !== key;
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

  const filteredTasks = tasks.filter((task) => {
    return task.text.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Grid container direction="column" gap={5}>
      <Typography variant="h4" mt={4}>
        ToDo-List
      </Typography>
      {children}
      {filteredTasks.map((task, index) => (
        <ToDoItem
          task={task}
          key={task.id}
          onClick={() => {
            deleteTodo(index);
          }}
          onClickIcon={(id, text) => {
            handleUpdateText(id, text);
          }}
          isCheck={task.check}
          handleChange={handleChange}
        />
      ))}
    </Grid>
  );
};

export default ToDoList;
