import React, { forwardRef, useId } from 'react';

const BeforeReact19Input = forwardRef(
    ({ label, type = 'text', ...otherProps },
        ref) => {
        const id = useId();
        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <input id={id} type={type} ref={ref} {...otherProps} />
            </div>
        );
    });

export default BeforeReact19Input;
