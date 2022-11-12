import { useState } from 'react';

const CardTemplate: React.FC = () => {
    const [title, setTitle] = useState('');
    const [cards, setCards] = useState<string[]>([]);

    const onClick = () => {
        setTitle('');
        setCards([...cards, title]);
    }

    return (
        <div>
            <div>Card List</div>
            <ul>
                {cards.map((card, i) => (
                    <li key={`card_${i}`}>{card}</li>
                ))}
            </ul>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button onClick={onClick}>Add Card</button>
        </div>
    );
};

export default CardTemplate;