interface ListProps {
    array: string[];
}

function List({ array }: ListProps) {

    return (
        <div className="flex">
            {array.map((str) => (
                <div className="text-xs md:text-base border p-1 m-1">
                    {str}
                </div>
            ))}
        </div>
    );
}


export default List;
