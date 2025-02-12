import { ProjectDescriptor } from '../types.ts';

import Modal from './Modals.tsx';

interface ProjectModalProps {
    isOpen: boolean;
    descriptor: ProjectDescriptor;
    title: string;
}

function ProjectModal({ isOpen, descriptor, title }: ProjectModalProps) {

    return (
        <Modal isOpen={isOpen}>
            <header>
                <h1>{title}</h1>
            </header>
            <main>
                {/*<img>{descriptor.media}</img>*/}
                <p>{descriptor.detail}</p>
                <ul>
                    <li>
                        <h2>
                            {descriptor.portfolios.one.header}
                        </h2>
                        <p>
                            {descriptor.portfolios.one.descriptor}
                        </p>
                    </li>
                    <li>
                        <h2>
                            {descriptor.portfolios.two.header}
                        </h2>
                        <p>
                            {descriptor.portfolios.two.descriptor}
                        </p>
                    </li>
                </ul>
            </main>
        </Modal>
    );
}

export default ProjectModal;
