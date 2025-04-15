import { createContext } from "react";


// Step1 
export const BioContext = createContext();

// 2nd Step(Provider/Warehouse)
export const BioProvider = ({children}) => {
    const myFname ="Nikhil";
    const myMname="Kumar";
    const myLname="Pandey";
    const myAge=25;
    return (
        <BioContext.Provider value={{myFname,myMname,myLname,myAge}}>{children}</BioContext.Provider>
    )
}