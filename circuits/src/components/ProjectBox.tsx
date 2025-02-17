import { ProjectData } from '../types.ts';

import Box from './box.tsx'
import ProjectModal from './ProjectModal.tsx';
import List from './list.tsx';

import { useState } from 'react';

interface ProjectProps {
    data: ProjectData;
}

function ProjectBox({ data }: ProjectProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMouseEnter = () => setIsModalOpen(true);
    const handleMouseLeave = () => setIsModalOpen(false);

    return (
        <div className="mx-1" onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
            <Box>
                <header className='mx-2 py-2'>
                    <h1 className='font-semibold text-5xl'>{data.title}</h1>
                </header>
                <main className='my-5 mx-3'>
                    <h2 className='text-lg font-medium'>{data.role}</h2>
                    <p className='my-3 w-80'>{data.brief}</p>
                </main>
                <footer className='mx-2'>
                    <List array={data.stack}/>
                </footer>
            </Box>
            <ProjectModal isOpen={isModalOpen} descriptor={data.descriptor} title={data.title} footer={data.stack}/>
        </div>
    )
}

export default ProjectBox
