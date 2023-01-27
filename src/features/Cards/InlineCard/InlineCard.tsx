import { useState } from 'react';
import { CardType } from '../../../shared/types/card.types';
import styles from './inlineCard.module.scss';
import InlineControlsOverlay from '../InlineControlsOverlay/InlineControlsOverlay';

type InlineCardType = {
    card: CardType;
    deckId: string;
}

const InlineCard = ({card, deckId}: InlineCardType) => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div className={styles.inline_card} onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
            {hovered && <InlineControlsOverlay cardId={card.cardId} deckId={deckId} />}
            {/* {hovered ?? <InlineControlsOverlay cardId={card.cardId} deckId={deckId} />} */}
            <div className={`${styles.inline_content} ${styles.inline_title}`}>{card.title}</div>
            <div className={`${styles.inline_content} ${styles.inline_desc}`}>{card.description}</div>
        </div>
    )
}

export default InlineCard;