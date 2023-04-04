import { MouseEvent } from 'react';

function ListGroup() {
    const items = ['New York', 'San Francisco', 'Tokyo', 'Paris'];
    const handleClick = (evt: MouseEvent) => {
        console.log(evt);
    };

    return (
        <>
            <h1>List Group</h1>
            {!items.length && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={item}
                        className="list-group-item"
                        onClick={handleClick}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
