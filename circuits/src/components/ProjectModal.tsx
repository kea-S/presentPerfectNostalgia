import { useEffect } from 'react';
import { ProjectDescriptor } from '../types.ts';

import Modal from './Modals.tsx';
import List from './list.tsx';

interface ProjectModalProps {
    isOpen: boolean;
    descriptor: ProjectDescriptor;
    title: string;
    footer: string[];
}

function ProjectModal({ isOpen, descriptor, title, footer }: ProjectModalProps) {

    function preLoad(img: string) {
        return new Promise((resolve, reject) => {
            const imageWrapper = new Image()
            imageWrapper.src = img;
            imageWrapper.onload = () => resolve("OK 200");
            imageWrapper.onerror = (error) => reject(error);
        })
    }
    // when descriptor.data changes (info ready), preload
    useEffect(() => {
        preLoad(descriptor.media).then(()=>console.log("loading image"));
    }, [descriptor.media]);

    return (
        <Modal isOpen={isOpen}>
            <header className='mx-5 my-3'>
                <h1 className='font-semibold text-5xl'>{title}</h1>
            </header>
            <main className='my-5 mx-2 flex p-1'>
                <div className='flex-1 m-1 p-2 '>
                    <p className='my-2'>{descriptor.detail}</p>
                    <ul className='my-1'>
                        <li className='my-2'>
                            <h2 className='text-lg font-medium'>
                                {descriptor.portfolios.one.header}
                            </h2>
                            <p>
                                {descriptor.portfolios.one.descriptor}
                            </p>
                        </li>
                        <li className='my-2'>
                            <h2 className='text-lg font-medium'>
                                {descriptor.portfolios.two.header}
                            </h2>
                            <p>
                                {descriptor.portfolios.two.descriptor}
                            </p>
                        </li>
                    </ul>
                    <footer className='my-5'>
                        <List array={footer} />
                    </footer>
                </div>
                <div className='flex-1 m-1 px-5 py-5'>
                    <img src={descriptor.media} className="w-80" />
                </div>
            </main>
        </Modal>
    );
}

export default ProjectModal;
