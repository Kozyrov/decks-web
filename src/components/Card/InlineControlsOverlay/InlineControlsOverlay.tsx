import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import InlineMoreMenu from '../../Shared/InlineMoreMenu';
import styles from './inlineControlsOverlay.module.scss';

type InlineControlsOverlayType = {
    targetId: string;
}

const InlineControlsOverlay = ({targetId}: InlineControlsOverlayType) => {

    const [showMoreMenu, setShowMoreMenu] = useState(false);

    return (
        <div className={styles.inline_controls_overlay} id={`inline-control-${targetId}`}>
            <MoreHorizIcon onClick={() => setShowMoreMenu(!showMoreMenu)} />
            {showMoreMenu && <InlineMoreMenu targetId={targetId} />}
        </div>
    )
}

export default InlineControlsOverlay;