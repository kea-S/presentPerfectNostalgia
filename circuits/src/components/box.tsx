import React from 'react';
import { useState } from 'react';

import Modal from './Modals';

interface BoxProps {
    children?: React.ReactNode;
}

function Box( {children}: BoxProps ) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMouseEnter = () => setIsModalOpen(true);
    const handleMouseLeave = () => setIsModalOpen(false);

    return (
        <>
        <div className="box-content w-72 sm:w-128 md:w-150 sm:h-60 border"
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
        </div>
        <Modal isOpen={isModalOpen} />
        </>
    );
}

export default Box
