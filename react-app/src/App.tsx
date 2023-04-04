import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import './App.css';

function App() {
    const [alertVisible, setAlertVisibility] = useState(false);
    const items = ['New York', 'San Francisco', 'Tokyo', 'Paris'];
    const heading = 'Cities';
    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    return (
        <div>
            {alertVisible && (
                <Alert onClose={() => setAlertVisibility(false)}>
                    My Alert
                </Alert>
            )}
            <Button color="primary" onClick={() => setAlertVisibility(true)}>
                My Button
            </Button>
            <ListGroup
                items={items}
                heading={heading}
                onSelectItem={handleSelectItem}
            ></ListGroup>
        </div>
    );
}

export default App;
