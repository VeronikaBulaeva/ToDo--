import { Grid } from "@mui/material";
import { FC, PropsWithChildren, useCallback } from "react";
import ToDoItem from "@/components/ToDoItem";
import { TaskType } from "@/components/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  deleteToDo,
  filterSelector,
  handleChangeText,
  handleCheck,
  toDoListSelector,
} from "@/store/toDoSlice";

const ToDoList: FC<PropsWithChildren> = ({ children }) => {
  const tasks = useAppSelector(toDoListSelector);
  const search = useAppSelector(filterSelector);
  const dispatch = useAppDispatch();

  const handleChange = (e: TaskType) => {
    dispatch(handleCheck(e));
  };

  const handleUpdateText = (id: number, text: string) => {
    dispatch(handleChangeText({ id, text }));
  };

  const filteredTasks = useCallback(
    () =>
      tasks.filter((task) =>
        task.text.toLowerCase().includes(search.toLowerCase()),
      ),
    [tasks, search],
  );

  return (
    <Grid container direction="column" gap={2} mt={2}>
      {children}
      {filteredTasks().map((task) => (
        <ToDoItem
          task={task}
          key={task.id}
          onClickDelete={() => {
            dispatch(deleteToDo(task.id));
          }}
          onClickIconSave={handleUpdateText}
          isCheck={task.check}
          handleChange={handleChange}
        />
      ))}
    </Grid>
  );
};

export default ToDoList;
