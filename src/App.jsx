import ToDoList from "src/components/ToDoList.jsx";
import Filter from "src/components/Filter.jsx";
import Input from "src/components/Input.jsx";
import React from "react";
import { Provider, SearchProvider } from "src/components/Context.jsx";

function App() {
  return (
    <Provider>
      <SearchProvider>
        <ToDoList>
          <Filter />
          <Input />
        </ToDoList>
      </SearchProvider>
    </Provider>
  );
}

export default App;
