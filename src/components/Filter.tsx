import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { debounce } from "@/utils/debouce";
import { useAppDispatch } from "@/store/hooks";
import { setFilter } from "@/store/toDoSlice";

const Filter = () => {
  const dispatch = useAppDispatch();

  const onSearch = debounce((task) => {
    dispatch(setFilter(task.target.value));
  });

  return (
    <Paper
      component="form"
      sx={{
        pt: 0.5,
        width: 400,
        mt: 2,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Filter"
        onChange={onSearch}
      />
    </Paper>
  );
};
export default Filter;
