import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

const Filter = ({ onSearch }) => {
  return (
    <Paper
      component="form"
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
        placeholder="Filter"
        onChange={onSearch}
      />
    </Paper>
  );
};
export default Filter;
