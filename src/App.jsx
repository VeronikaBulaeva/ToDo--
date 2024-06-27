import ToDoList from "src/components/ToDoList.jsx";
import Filter from "src/components/Filter.jsx";
import Input from "src/components/ToDoInput.jsx";
import { Provider } from "src/components/TasksContext.jsx";
import { Typography } from "@mui/material";
import { SearchProvider } from "./components/FilterContext.jsx";

function App() {
  return (
    <Provider>
      <SearchProvider>
        <Typography variant="h4" mt={4}>
          ToDo-List
        </Typography>
        <ToDoList>
          <Filter />
          <Input />
        </ToDoList>
      </SearchProvider>
    </Provider>
  );
}

export default App;
