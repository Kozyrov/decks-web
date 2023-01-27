import { useState } from 'react';
import { CardType } from '../../shared/types/card.types';
import InlineCard from '../Cards/InlineCard/InlineCard';
import InlineCardTemplate from '../Shared/InlineTemplate';
import styles from './deck.module.scss';

const Deck = () => {
    const [cards, setCards] = useState<CardType[]>([]);
    const deckId = "101";

    return (
        <div className={styles.deck}>
            <span>Deck {cards.length}</span>
            {cards.map((card) => (
                <InlineCard card={card} deckId={deckId} key={`${deckId}_${card.cardId}`} />
            ))}
            <InlineCardTemplate addCardToDeck={(card) => setCards([...cards, card])}/>
        </div>
    )
}

export default Deck;