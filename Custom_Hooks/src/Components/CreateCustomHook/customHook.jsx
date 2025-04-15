import { useContext } from "react";
import { BioContext } from "../CustomHooks";

export const useBioContext = () => {
    const context = useContext(BioContext);
    if (context === undefined) {
        throw new Error("Component must be Wrapped with Bio Provider")
    }
    return context;
}