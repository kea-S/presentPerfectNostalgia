import { useState, useEffect } from "react"
import ImageBox from "./ImageBox"
import KeaHarvanBox from "./KeaHarvanBox"
import ProjectBox from "./ProjectBox"

function Grid() {
    const cells = [
        <KeaHarvanBox key="1" />,
        <ProjectBox key="2" />,
        <ProjectBox key="3" />,
        <ProjectBox key="4" />,
        <ProjectBox key="5" />,
        <ImageBox key="6" />,
        <ImageBox key="7" />,
        <ProjectBox key="8" />,
        <ProjectBox key="9" />,
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
                <div key={rowIndex} className={`col-span-full ${rowIndex % 2 === 1 ? 'bg-white text-black' : ''}`}>
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
