import { createContext } from "react";

const SearchContext = createContext({
    searchContext: "search",
    setSearchContext: () => { }
})


export default SearchContext