import React from 'react';

interface ModalProps {
    isOpen: boolean;
    children?: React.ReactNode;
}

function Modal({ isOpen, children }: ModalProps) {

    return (
        <div className={isOpen ? 'block' : 'hidden'}>
            <div style={{pointerEvents: "none"}}
                className="fixed z-20 top-1/2 left-1/2
                transform -translate-x-1/2 -translate-y-1/2 
                bg-black text-white w-192 h-176 border 
                [&_*]:!border-white !border-white p-4 hidden sm:block">
                {children}
            </div>
        </div>
    );
}

export default Modal;
