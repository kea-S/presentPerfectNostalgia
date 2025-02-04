import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    children?: React.ReactNode;
}

function Modal({ isOpen, children }: ModalProps) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
                {children}
                <p>Hi there</p>
            </div>
        </div>,
        document.body
    );
}

export default Modal;
