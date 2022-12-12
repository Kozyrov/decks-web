import { useState } from 'react';
import { CardType } from '../../shared/types/card.types';
import InlineCard from '../Card/InlineCard';
import InlineCardTemplate from '../Shared/InlineTemplate';
import styles from './deck.module.scss';

const Deck = () => {
    const [cards, setCards] = useState<CardType[]>([]);

    return (
        <div className={styles.deck}>
            <span>Deck {cards.length}</span>
            {cards.map((card) => (
                <InlineCard card={card} key={card.id} />
            ))}
            <InlineCardTemplate addCardToDeck={(card) => setCards([...cards, card])}/>
        </div>
    )
}

export default Deck;