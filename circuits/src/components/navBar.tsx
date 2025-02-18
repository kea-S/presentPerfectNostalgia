import Box from "./box";

function NavBar() {

    return (
        <Box>
            <div className="h-40 flex">
                <div className="flex basis-2/3 p-3">
                    <a className="border flex-1 flex justify-center items-center font-normal no-underline text-current
                        hover:no-underline hover:text-current"
                        href="/KeaHarvanSuyanto_Resume.pdf"
                        download>
                        <h6>My Resume</h6>
                    </a>
                </div>
                <div className="flex h-32 basis-1/3 self-end p-3">
                    <a className="border flex-1 flex justify-center items-center font-normal no-underline text-current
                        hover:no-underline hover:text-current"
                        href="https://github.com/kea-S"
                        target="_blank">
                        <h6>My Github</h6>
                    </a>
                </div>
            </div>
            <div className="h-20 flex justify-around">
                <div className="flex basis-2/5 p-3">
                    <a className="border flex-1 flex justify-center items-center font-normal no-underline text-current
                        hover:no-underline hover:text-current"
                        href="mailto:kea_harvan@u.nus.edu"
                        target="_blank">
                        <h6>My Email</h6>
                    </a>
                </div>
                <div className="flex basis-2/5 p-3">
                    <a className="border flex-1 flex justify-center items-center font-normal no-underline text-current
                        hover:no-underline hover:text-current
                        " href="https://www.linkedin.com/in/keaharvan"
                        target="_blank">
                        <h6>My LinkedIn</h6>
                    </a>
                </div>
            </div>
        </Box>
    );
}

export default NavBar
