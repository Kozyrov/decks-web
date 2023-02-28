import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { Entity } from '../../shared/types/entity.types';
import InlineCard from '../Cards/InlineCard/InlineCard';
import { addNewCardToDeck, selectCardsByDeckId } from '../Collection/collectionSlice';
import InlineTemplate from '../Shared/InlineTemplate';
import styles from './deck.module.scss';

const Deck = () => {
    const deckId = "101";

    const dispatch = useDispatch();
    const cards: Entity[] = useSelector((state: RootState) => selectCardsByDeckId(state.collection, deckId));

    return (
        <div className={styles.deck}>
            <span>Deck {cards.length}</span>
            {cards.map((card) => (
                <InlineCard card={card} deckId={deckId} key={`${deckId}_${card.uniqueId}`} />
            ))}
            <InlineTemplate groupId={deckId} entityName={"card"} addNewEntityToGroup={(card: Entity) => dispatch(addNewCardToDeck(card))}/>
        </div>
    )
}

export default Deck;