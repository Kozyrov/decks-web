import { CardType } from '../../shared/types/card.types';
import styles from './inlineCard.module.scss'

type InlineCardType = {
    card: CardType
}

const InlineCard = ({card}: InlineCardType) => {
    return (
        <div className={styles.inline_card}>
            <div className={`${styles.inline_content} ${styles.inline_title}`}>{card.title}</div>
            <div className={`${styles.inline_content} ${styles.inline_desc}`}>{card.description}</div>
        </div>
    )
}

export default InlineCard;