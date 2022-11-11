import { useState } from 'react';

const TodoTemplate: React.FC = () => {
    const [name, setName] = useState('');
    
    return (
        <div>
            <div>Todos</div>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button>Add Todo</button>
        </div>
    );
};

export default TodoTemplate;