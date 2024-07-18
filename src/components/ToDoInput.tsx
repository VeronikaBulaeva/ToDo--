import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { FC, useCallback, useEffect, useRef } from "react";
import { ToDoInputType } from "@/components/types";
import { useAppDispatch } from "@/store/hooks";
import { addToDo } from "@/store/toDoSlice";

const ToDoInput: FC<ToDoInputType> = ({
  onClickIconSave,
  onClickCancel,
  value,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (value && ref.current) {
      ref.current.value = value;
    }
  }, []);

  const clearInput = useCallback(() => {
    if (ref.current) {
      ref.current.value = "";
    }
  }, []);

  const addTodo = (value: string) => {
    if (value) {
      dispatch(addToDo({ text: value, id: Date.now(), check: false }));
    }
  };

  const onClickAdd = () => {
    if (onClickIconSave && ref.current) {
      onClickIconSave(ref.current.value);
    }
    if (!value && ref.current) {
      addTodo(ref.current.value);
      clearInput();
    }
  };

  return (
    <Paper
      sx={{
        pt: 0.5,
        mt: 2,
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
