import { memo } from "react";
import { useRef } from "react"

export const Count = memo(({ bioData }) => {
    const renderCount = useRef(0);
    console.log(renderCount);

    return (
        <div className="mt-3 font-display text-center">
            <p className="">
                Nothing changed here but Ive now rendered:
                <span className="text-red-600">{renderCount.current++} time(s)</span>
            </p>
            <p className="text-blue-500">My name is {bioData.fName} {bioData.mName} {bioData.lName} {bioData.Age}</p>

        </div>
    )
})
