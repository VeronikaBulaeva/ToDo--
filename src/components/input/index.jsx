import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { useEffect, useRef } from "react";

const Input = ({ onClickIcon, onClickCancel, value }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (value) {
      ref.current.value = value;
    }
  }, []);

  const clearInput = () => {
    ref.current.value = "";
  };

  const onClickAdd = () => {
    onClickIcon(ref.current.value);
    if (!value) {
      clearInput();
    }
  };

  return (
    <Paper
      sx={{
        px: "2px",
        pt: "4px",
        display: "flex",
        alignItems: "center",
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
        sx={{ p: "10px" }}
        onClick={() => {
          onClickAdd();
        }}
      >
        {value ? <SaveOutlinedIcon /> : <AddOutlinedIcon />}
      </IconButton>
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        onClick={() => {
          onClickCancel ? onClickCancel() : clearInput();
        }}
      >
        <ClearOutlinedIcon />
      </IconButton>
    </Paper>
  );
};

export default Input;
