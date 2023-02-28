import { useState } from 'react';
import { Entity } from '../../../shared/types/entity.types';
import styles from './inlineCard.module.scss';
import InlineControlsOverlay from '../InlineControlsOverlay/InlineControlsOverlay';

interface InlineCardProps {
    card: Entity;
    deckId: string;
}

const InlineCard = ({card, deckId}: InlineCardProps ) => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div className={styles.inline_card} onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
            {hovered && <InlineControlsOverlay cardId={card.uniqueId} deckId={deckId} />}
            {/* {hovered ?? <InlineControlsOverlay cardId={card.cardId} deckId={deckId} />} */}
            <div className={`${styles.inline_content} ${styles.inline_title}`}>{card.title}</div>
            <div className={`${styles.inline_content} ${styles.inline_desc}`}>{card.description}</div>
        </div>
    )
}

export default InlineCard;