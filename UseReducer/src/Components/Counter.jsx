import { useReducer } from "react";


export const ReducerComp = () => {
    const initialState = {
        count: 0,
        inc: 2,
        dec: 2,
    }
    const reducer = (state, action) => {
        console.log(state, action);
        // if (action.type === "INCREMENT") {
        //     return state + 1;
        // } if(action.type==="DECREMENT") {
        //     return state - 1;
        // }if(action.type==="RESET"){
        //     return state=0;
        // }
        switch (action.type) {
            case "INCREMENT":
                return {
                    ...state, count: state.count + 1 };
            case "DECREMENT":
                return { ...state, count: state.count - 1 };
            case "RESET":
                return { ...state, count: 0 }

            default:
                state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    return (

        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">{state.count}</h1>
            <div className="space-x-4">
                <button
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                    disabled={state.count === 100}
                    onClick={() => dispatch({ type: "INCREMENT" })}
                >
                    Increment
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                    disabled={state.count < 1}
                    onClick={() => dispatch({ type: "DECREMENT" })}
                >
                    Decrement
                </button>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                    disabled={state.count === 0}
                    onClick={() => dispatch({ type: "RESET" })}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};