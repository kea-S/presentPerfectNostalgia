import Box from "./box";

function NavBar() {

    return (
        <Box>
            <div className="h-40 flex">
                <div className="flex basis-2/3 p-3">
                    <div className="border flex-1 flex justify-center items-center">
                        <h6>My Resume</h6>
                    </div>
                </div>
                <div className="flex h-32 basis-1/3 self-end p-3">
                    <div className="border flex-1 flex justify-center items-center">
                        <h6>My Github</h6>
                    </div>
                </div>
            </div>
            <div className="h-20 flex justify-around">
                <div className="flex basis-2/5 p-3">
                    <div className="border flex-1 flex justify-center items-center">
                        <h6>My Email</h6>
                    </div>
                </div>
                <div className="flex basis-2/5 p-3">
                    <div className="border flex-1 flex justify-center items-center">
                        <h6>My LinkedIn</h6>
                    </div>
                </div>
            </div>


        </Box>
    );
}

export default NavBar
