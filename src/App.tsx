import ListGroup from './components/ListGroup';
import Alert from "./components/Alert";

let items = [
    'New York', 'San Francisco',
    'Tokyo', 'London',
    'Paris'
];

const handleSelectItem = (item: string) => {
    console.log(item);
}

function App() {
    return (
        <>
            <div>
                <ListGroup
                    items={items}
                    heading="Cities"
                    onSelectItem={handleSelectItem}
                />
            </div>
            <div className="mt-5">
                <Alert>
                    This is an <strong>Alert</strong>
                </Alert>
            </div>
        </>
    )
}

export default App;