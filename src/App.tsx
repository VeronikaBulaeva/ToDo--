import ToDoList from "@/components/ToDoList";
import Filter from "@/components/Filter";
import { Typography } from "@mui/material";
import ToDoInput from "@/components/ToDoInput";

function App() {
  return (
    <>
      <Typography variant="h4" mt={4} mb={2}>
        ToDo-List
      </Typography>
      <Filter />
      <ToDoInput />
      <ToDoList />
    </>
  );
}

export default App;
