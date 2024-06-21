import { Grid, Typography } from "@mui/material";
import Input from "src/components/input";
import { useState } from "react";
import ListItem from "src/components/listItem";
import Filter from "src/components/filter";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [isCheck, setCheck] = useState(false);

  const handleChange = (e) => {
    const updatedList = tasks.map((task) => {
      if (task.id === e.id) {
        task.check = !e.check;
        setCheck(e.check);
      }
      return task;
    });
    setTasks(updatedList);
  };

  const addTodo = (value) => {
    if (value) {
      setTasks([...tasks, { text: value, id: Date.now(), check: isCheck }]);
    }
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

  const onSearch = (task) => {
    setSearch(task.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    return task.text.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Grid container direction="column" gap="40px">
      <Typography variant="h4" mt="30px">
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
          isCheck={task.check}
          handleChange={handleChange}
        />
      ))}
    </Grid>
  );
};

export default ToDoList;
