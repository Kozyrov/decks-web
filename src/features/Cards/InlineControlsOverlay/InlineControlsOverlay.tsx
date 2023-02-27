import ArchiveIcon from '@mui/icons-material/Archive';
import { removeCard } from '../../Collection/collectionSlice';
import styles from './inlineControlsOverlay.module.scss';

type InlineControlsOverlayType = {
    cardId: string;
    deckId: string;
}

const InlineControlsOverlay = ({cardId, deckId}: InlineControlsOverlayType) => {
    return (
        <div className={`${styles.inline_controls_overlay}`} id={`inline-control-${cardId}`}>
            <ArchiveIcon onClick={() => removeCard({ cardId, deckId })} />
        </div>
    )
}

export default InlineControlsOverlay;