import React from 'react';

interface ModalProps {
    isOpen: boolean;
    children?: React.ReactNode;
}

function Modal({ isOpen, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div style={{pointerEvents: 'none'}}>
            {isOpen && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                {children}
                <p>Hi there</p>
            </div>}
        </div>
    );
}

export default Modal;
