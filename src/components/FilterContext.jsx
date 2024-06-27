import { createContext, useContext, useState } from "react";
import { useContextError } from "./useContextError.js";

const FilterContext = createContext("");
const SetFilterContext = createContext(() => {});

export const useSearch = () => {
  const searchState = useContext(FilterContext);
  useContextError(
    typeof searchState === "string",
    "you cant use the useSearch hook outside the FilterContext",
  );
  return searchState;
};
export const useSetSearch = () => {
  const setSearchState = useContext(SetFilterContext);
  useContextError(
    setSearchState,
    "you cant use the useSetSearch hook outside the SetFilterContext",
  );
  return setSearchState;
};

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  return (
    <FilterContext.Provider value={search}>
      <SetFilterContext.Provider value={setSearch}>
        {children}
      </SetFilterContext.Provider>
    </FilterContext.Provider>
  );
};
