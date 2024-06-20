import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

const Filter = ({ onSearch }) => {
  return (
    <div className={"filterContainer"}>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Filter"
          onChange={onSearch}
        />
      </Paper>
    </div>
  );
};
export default Filter;
