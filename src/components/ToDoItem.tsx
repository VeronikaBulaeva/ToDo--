import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { FC, useState } from "react";
import { FormGroup } from "@mui/material";
import ToDoInput from "@/components/ToDoInput";
import { ToDoItemProps } from "@/components/types";

const ToDoItem: FC<ToDoItemProps> = ({
  task,
  onClickDelete,
  onClickIconSave,
  isCheck,
  handleChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditing = (value: boolean) => {
    setIsEditing(value);
  };

  return (
    <>
      {isEditing ? (
        <ToDoInput
          value={task.text}
          onClickIconSave={(text: string) => {
            onClickIconSave(task.id, text);
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
          <IconButton type="button" sx={{ p: 1.5 }} onClick={onClickDelete}>
            <DeleteIcon />
          </IconButton>
        </FormGroup>
      )}
    </>
  );
};

export default ToDoItem;
