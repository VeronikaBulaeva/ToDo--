import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { useCallback, useEffect, useRef } from "react";
import { useSetTasks } from "src/components/TasksContext.jsx";

const ToDoInput = ({ onClickIconSave, onClickCancel, value }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (value) {
      ref.current.value = value;
    }
  }, []);

  const clearInput = useCallback(() => {
    ref.current.value = "";
  }, []);

  const setTasks = useSetTasks();

  const addTodo = (value) => {
    if (value) {
      setTasks((prevState) => [
        ...prevState,
        { text: value, id: Date.now(), check: false },
      ]);
    }
  };

  const onClickAdd = () => {
    if (onClickIconSave) {
      onClickIconSave(ref.current.value);
    }
    if (!value) {
      addTodo(ref.current.value);
      clearInput();
    }
  };

  return (
    <Paper
      sx={{
        pt: 0.5,
        display: "flex",
        width: 400,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="ToDo"
        autoFocus
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onClickAdd();
          }
        }}
        inputRef={ref}
      />
      <IconButton
        type="button"
        sx={{ p: 1.5 }}
        onClick={() => {
          onClickAdd();
        }}
      >
        {value ? <SaveOutlinedIcon /> : <AddOutlinedIcon />}
      </IconButton>
      <IconButton
        type="button"
        sx={{ p: 1.5 }}
        onClick={() => {
          onClickCancel ? onClickCancel() : clearInput();
        }}
      >
        <ClearOutlinedIcon />
      </IconButton>
    </Paper>
  );
};

export default ToDoInput;
