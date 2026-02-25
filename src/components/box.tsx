import React from 'react';

interface BoxProps {
    children?: React.ReactNode;
}

function Box( {children}: BoxProps ) {

    return (
        <div className="box-content w-72 sm:w-128 md:w-150 h-60">
            {children}
        </div>
    );
}

export default Box
