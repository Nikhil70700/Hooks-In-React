import { createContext } from "react";


// Step1 
export const BioContext = createContext();
// 2nd Step(Provider/Warehouse)
export const BioProvider = ({children}) => {
    const myName = "Nikhil Pandey";
    const myAge=25;
    return (
        <BioContext.Provider value={{myName,myAge}}>{children}</BioContext.Provider>
    )
}