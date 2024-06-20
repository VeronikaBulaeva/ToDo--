import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";
import Input from "../input/index.jsx";

const ListItem = ({ task, onClick, onClickIcon }) => {
  const [isCheck, setCheck] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setCheck(e.target.checked);
  };

  const handleEditing = (value) => {
    setIsEditing(value);
  };

  return (
    <div>
      {isEditing ? (
        <Input
          value={task.text}
          onClickIcon={(text) => {
            onClickIcon(task.id, text);
          }}
          onClickCancel={() => {
            handleEditing(false);
          }}
        />
      ) : (
        <>
          <FormControlLabel
            sx={{ textDecoration: isCheck ? "line-through" : "none" }}
            control={
              <Checkbox
                name="react"
                checked={isCheck}
                onChange={handleChange}
              />
            }
            label={task.text}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            onClick={() => {
              handleEditing(true);
            }}
          >
            <EditOutlinedIcon />
          </IconButton>
          <IconButton type="button" sx={{ p: "10px" }} onClick={onClick}>
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </div>
  );
};

export default ListItem;
