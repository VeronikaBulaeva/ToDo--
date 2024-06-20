import { Typography } from "@mui/material";
import Input from "../input/index.jsx";
import { useState } from "react";
import ListItem from "../listItem/index.jsx";
import Filter from "../filter/index.jsx";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const addTodo = (value) => {
    setTasks([...tasks, { text: value, id: Date.now() }]);
    setSearch("");
  };

  const deleteTodo = (e) => {
    const updateTodo = tasks.filter((item, index) => {
      return index !== e;
    });
    setTasks(updateTodo);
  };

  const handleUpdateText = (id, text) => {
    const updatedList = tasks.map((e) => {
      if (e.id === id) {
        e.text = text;
      }
      return e;
    });
    setTasks(updatedList);
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    return task.text.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div style={{ display: "grid", gap: 40 }}>
      <Typography variant="h4" marginBlockStart="30px">
        ToDo-List
      </Typography>
      <Filter onSearch={onSearch} />
      <Input onClickIcon={addTodo} />
      {filteredTasks.map((task, index) => (
        <ListItem
          task={task}
          key={`${task.text}${task.id}`}
          onClick={() => deleteTodo(index)}
          onClickIcon={(id, text) => {
            handleUpdateText(id, text);
          }}
        />
      ))}
    </div>
  );
};

export default ToDoList;
