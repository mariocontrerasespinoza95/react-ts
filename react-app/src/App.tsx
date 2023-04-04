import ListGroup from './components/ListGroup';

function App() {
    const items = ['New York', 'San Francisco', 'Tokyo', 'Paris'];
    const heading = 'Cities';
    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    return (
        <div>
            <ListGroup
                items={items}
                heading={heading}
                onSelectItem={handleSelectItem}
            ></ListGroup>
        </div>
    );
}

export default App;
