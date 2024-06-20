import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
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

  return (
    <div className={"filterContainer"}>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="ToDo"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onClickIcon(ref.current.value);
              clearInput();
            }
          }}
          inputRef={ref}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          onClick={() => {
            onClickIcon(ref.current.value);
            clearInput();
          }}
        >
          <AddOutlinedIcon />
        </IconButton>
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          onClick={() => {
            if (onClickCancel) {
              onClickCancel();
            } else {
              clearInput();
            }
          }}
        >
          <ClearOutlinedIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default Input;
