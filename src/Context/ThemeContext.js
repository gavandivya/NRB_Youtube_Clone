import { createContext } from "react";

const ThemeContext = createContext({
    themeCon: "default",
    setThemeCon: () => { }
});


export default ThemeContext;