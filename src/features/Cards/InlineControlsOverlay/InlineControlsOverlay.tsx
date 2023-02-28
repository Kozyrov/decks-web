import ArchiveIcon from '@mui/icons-material/Archive';
import { useDispatch } from 'react-redux';
import { removeCardFromDeck } from '../../Collection/collectionSlice';
import styles from './inlineControlsOverlay.module.scss';

type InlineControlsOverlayProps = {
    cardId: string;
    deckId: string;
}


const InlineControlsOverlay = ({cardId, deckId}: InlineControlsOverlayProps) => {
    const dispatch = useDispatch();

    return (
        <div className={`${styles.inline_controls_overlay}`} id={`inline-control-${cardId}`}>
            <ArchiveIcon onClick={() => dispatch(removeCardFromDeck({ uniqueId: cardId, groupId: deckId }))} />
        </div>
    )
}

export default InlineControlsOverlay;