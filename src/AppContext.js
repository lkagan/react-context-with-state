import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [username, setUsername] = useState("lkagan");
    return <AppContext.Provider value={{ username, setUsername } }> { children } </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppContextProvider, useAppContext };