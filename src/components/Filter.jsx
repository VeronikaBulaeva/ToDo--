import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { debounce } from "src/components/debouce.js";
import { useSetSearch } from "src/components/FilterContext";

const Filter = () => {
  const setSearch = useSetSearch();

  const onSearch = debounce((task) => {
    setSearch(task.target.value);
  });

  return (
    <Paper
      component="form"
      sx={{
        pt: 0.5,
        width: 400,
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
