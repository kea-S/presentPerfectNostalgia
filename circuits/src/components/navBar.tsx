function NavBar() {

    return (
        <div className="box-content w-32 md:w-96 xl:w-150 h-60">
            <div className="h-40 flex">
                <div className="flex basis-2/3 p-3">
                    <a className="border flex-1 flex justify-center items-center font-normal no-underline text-current
                        hover:no-underline hover:text-current bg-black"
                        href="/KeaHarvanSuyanto_Resume.pdf"
                        download>
                        <h6 className="text-xs md:text-base">Resume</h6>
                    </a>
                </div>
                <div className="flex h-32 basis-1/3 self-end p-3">
                    <a className="border flex-1 flex justify-center items-center font-normal no-underline text-current
                        hover:no-underline hover:text-current bg-black"
                        href="https://github.com/kea-S"
                        target="_blank">
                        <h6 className="text-xs md:text-base">Github</h6>
                    </a>
                </div>
            </div>
            <div className="h-20 flex justify-around">
                <div className="flex basis-2/5 p-3">
                    <a className="border flex-1 flex justify-center items-center font-normal no-underline text-current
                        hover:no-underline hover:text-current bg-black"
                        href="mailto:kea_harvan@u.nus.edu"
                        target="_blank">
                        <h6 className="text-xs md:text-base">Email</h6>
                    </a>
                </div>
                <div className="flex basis-2/5 p-3">
                    <a className="border flex-1 flex justify-center items-center font-normal no-underline text-current
                        hover:no-underline hover:text-current bg-black"
                        href="https://www.linkedin.com/in/keaharvan"
                        target="_blank">
                        <h6 className="text-xs md:text-base">LinkedIn</h6>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavBar
