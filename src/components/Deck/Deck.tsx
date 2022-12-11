import { useState } from 'react';
import { CardType } from '../../shared/types/card.types';
import InlineCardTemplate from '../Card/InlineTemplate';

const Deck = () => {
    const [cards, setCards] = useState<CardType[]>([]);

    return (
        <div>
            <div>Card List</div>
            {cards.map((card, i) => (
                <>
                  <div key={`card_${i}`}>{card.title}</div>
                  <div key={`desc_${i}`}>{card.description}</div>
                </>
            ))}
            <InlineCardTemplate addCardToDeck={(card) => setCards([...cards, card])}/>
        </div>
    )
}

export default Deck;