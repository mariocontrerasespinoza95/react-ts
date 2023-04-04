import { useState } from 'react';
import styles from './ListGroup.module.css';

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {!items.length && <p>No item found</p>}
            <ul className={[styles['list-group'], styles.container].join(' ')}>
                {items.map((item, index) => (
                    <li
                        key={item}
                        className={
                            'list-group-item ' +
                            (selectedIndex === index && 'active')
                        }
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
