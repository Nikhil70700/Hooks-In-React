import React, { useCallback, useEffect, useRef, useState } from 'react'

const ExpensiveComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const previousFunction = useRef(null);

    const expensiveCalculation = useCallback(() => {
        console.log("Running expensive calculation...")
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }
        return result;

    }, [count]);

    useEffect(() => {
        if (previousFunction.current) {
            if (previousFunction.current === expensiveCalculation) {
                console.log("Function Is not Re-Created")
            } else {
                console.log("function got re-Created")
            }
        } else {
            previousFunction.current = expensiveCalculation
        }
    }, [expensiveCalculation])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type something"
                    className="w-full p-2 border rounded-md mb-4"
                />
                <p className="text-gray-700 mb-4">
                    Expensive Calculation Result: <span className="font-semibold text-purple-600">{expensiveCalculation()}</span>
                </p>
                <button
                    onClick={() => setCount(count + 1)}
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                >
                    Increment
                </button>
            </div>
        </div>
    )
}

export default ExpensiveComponent