interface ListProps {
    array: string[];
}

function List({ array }: ListProps) {

    return (
        <div className="flex">
            {array.map((str) => (
                <div className="border p-1 m-1">
                    {str}
                </div>
            ))}
        </div>
    );
}


export default List;
