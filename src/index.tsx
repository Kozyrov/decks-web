import * as ReactDOM from 'react-dom/client';
import TodoTemplate from './state/TodoTemplate';

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container!);

const App = () => {
    return (
        <div>
            <TodoTemplate />
        </div>
    );
};

root.render(<App />);