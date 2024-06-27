import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";
import Input from "src/components/Input.jsx";
import { FormGroup } from "@mui/material";

const ToDoItem = ({ task, onClick, onClickIcon, isCheck, handleChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditing = (value) => {
    setIsEditing(value);
  };

  return (
    <>
      {isEditing ? (
        <Input
          mt={30}
          value={task.text}
          onClickIcon={(text) => {
            onClickIcon(task.id, text);
            handleEditing(false);
          }}
          onClickCancel={() => {
            handleEditing(false);
          }}
        />
      ) : (
        <FormGroup row>
          <FormControlLabel
            sx={{ textDecoration: isCheck ? "line-through" : "none" }}
            control={
              <Checkbox
                name="react"
                checked={isCheck}
                onChange={() => {
                  handleChange(task);
                }}
              />
            }
            label={task.text}
          />
          <IconButton
            type="button"
            sx={{ p: 1.5 }}
            onClick={() => {
              handleEditing(true);
            }}
          >
            <EditOutlinedIcon />
          </IconButton>
          <IconButton type="button" sx={{ p: 1.5 }} onClick={onClick}>
            <DeleteIcon />
          </IconButton>
        </FormGroup>
      )}
    </>
  );
};

export default ToDoItem;
