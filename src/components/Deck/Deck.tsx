import { useState } from 'react';
import InlineCardTemplate from '../InlineCard/InlineCardTemplate';

const Deck = () => {
    const [cards, setCards] = useState<string[]>([]);

    return (
        <div>
            <div>Card List</div>
            {cards.map((card, i) => (
                <div key={`card_${i}`}>{card}</div>
            ))}
            <InlineCardTemplate addCardToDeck={(title) => setCards([...cards, title])}/>
        </div>
    )
}

export default Deck;