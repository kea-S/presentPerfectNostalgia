import ImageBox from "./ImageBox"
import KeaHarvanBox from "./KeaHarvanBox"
import ProjectBox from "./ProjectBox"

import { useState, useEffect } from "react"

import reVerb from '../data/Orbital.json';
import shep from '../data/Shep.json';

function Grid() {
    const cells = [
        <KeaHarvanBox key="1" />,
        <ProjectBox key="2" data={reVerb}/>,
        <ProjectBox key="3" data={shep}/>,
        <ProjectBox key="4" data={reVerb}/>,
        <ProjectBox key="5" data={shep}/>,
        <ImageBox key="6" />,
        <ImageBox key="7" />,
        <ProjectBox key="8" data={reVerb}/>,
        <ProjectBox key="9" data={reVerb}/>,
    ];

    const [numberCols, setNumberCols] = useState<number>(1)

    useEffect(() => {
        const updateCols = (): void => {
            const width = window.innerWidth;
            switch (true) {
                case width >= 1920:
                    setNumberCols(3)
                    break;
                case width >= 1280:
                    setNumberCols(2)
                    break;
                default:
                    setNumberCols(1)
                    break;
            }
        }

        updateCols()
        window.addEventListener('resize', updateCols)
        return () => window.removeEventListener('resize', updateCols)}, []);

    const rows = [];
    for (let i = 0; i < Math.ceil(cells.length / numberCols); i++) {
        rows.push(cells.slice(i * numberCols, (i + 1) * numberCols));
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 4xl:grid-cols-3 gap-x-2.5 gap-y-12.5 mx-12.5 my-10">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={`col-span-full ${rowIndex % 2 === 1 ? 'bg-white text-black [&_*]:border-black' 
: 'bg-black text-white [&_*]:border-white'}`}>
                    <div className="grid grid-cols-1 xl:grid-cols-2 4xl:grid-cols-3 gap-x-2.5">
                        {row.map((item, colIndex) => (
                            <div key={colIndex}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Grid
