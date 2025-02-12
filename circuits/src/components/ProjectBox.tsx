import { ProjectData } from '../types.ts';

import Box from './box.tsx'
import ProjectModal from './ProjectModal.tsx';

import { useState } from 'react';

interface ProjectProps {
    data: ProjectData
}

function ProjectBox({ data }: ProjectProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMouseEnter = () => setIsModalOpen(true);
    const handleMouseLeave = () => setIsModalOpen(false);

    return (
        <div onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
            <Box>
                <header>
                    <h1>{data.title}</h1>
                </header>
                <main>
                    <h2>{data.association}</h2>
                    <p>{data.brief}</p>
                    <h3>{data.stack}</h3> {/* new component here*/}
                </main>
            </Box>
            <ProjectModal isOpen={isModalOpen} descriptor={data.descriptor} title={data.title}/>
        </div>
    )
}

export default ProjectBox
