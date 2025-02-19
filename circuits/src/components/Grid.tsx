// import ImageBox from "./ImageBox"
import KeaHarvanBox from "./KeaHarvanBox"
import NavBar from "./navBar"
import ProjectBox from "./ProjectBox"
import Box from "./box"

import { useState, useEffect } from "react"

import reVerb from '../data/Orbital.json';
import shep from '../data/Shep.json';
import circuits from '../data/Circuits.json';
import nVim from '../data/Nvim.json';
import faceRecogniser from '../data/faceRecogniser.json';

// import ccLogo from '/cc.svg'
import DescriptionBox from "./DescriptionBox"

function Grid() {
    const cells = [
        <ProjectBox key="1" data={reVerb}/>,
        <ProjectBox key="2" data={faceRecogniser}/>,
        <Box key="3"/>,
        <ProjectBox key="4" data={circuits}/>,
        <ProjectBox key="5" data={shep}/>,
        <ProjectBox key="6" data={nVim}/>,
    ];

    const [numberCols, setNumberCols] = useState(1);

    useEffect(() => {
        const updateCols = (): void => {
            const width = window.innerWidth;
            switch (true) {
                case width >= 1920:
                    setNumberCols(3);
                    break;
                case width >= 1280:
                    setNumberCols(2);
                    break;
                default:
                    setNumberCols(1);
                    break;
            }
        }

        updateCols();
        window.addEventListener('resize', updateCols);
        return () => window.removeEventListener('resize', updateCols)}, []);

    const rows = [];
    for (let i = 0; i < Math.ceil(cells.length / numberCols); i++) {
        rows.push(cells.slice(i * numberCols, (i + 1) * numberCols));
    }

    return (
        <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 bg-black z-10 pb-12.5">
                <div className={`grid grid-cols-2 4xl:grid-cols-3 gap-x-2.5 gap-y-12.5 mx-12.5 mt-10 ${numberCols == 1 ? "bg-white" : ""}`}>
                    <KeaHarvanBox />
                    {numberCols == 3 ? <DescriptionBox /> : null}
                    <NavBar />
                </div>
            </header>

            <main className="flex-1">
                <div className="grid grid-cols-1 xl:grid-cols-2 4xl:grid-cols-3 gap-x-2.5 gap-y-12.5 mx-12.5">
                    {rows.map((row, rowIndex) => (
                        <div 
                            key={rowIndex} 
                            className={`col-span-full ${
rowIndex % 2 === 0
? 'bg-white text-black [&_*]:border-black' 
: 'bg-black text-white [&_*]:border-white'
}`}>
                            <div className="grid grid-cols-1 xl:grid-cols-2 4xl:grid-cols-3 gap-x-2.5">
                                {row.map((item, colIndex) => (
                                    <div key={colIndex}>{item}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Grid
