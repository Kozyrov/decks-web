import * as ReactDOM from 'react-dom/client';
import CardTemplate from './state/CardTemplate';

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container!);

const App = () => {
    return (
        <div>
            <CardTemplate />
        </div>
    );
};

root.render(<App />);