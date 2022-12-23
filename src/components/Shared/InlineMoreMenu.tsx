import DeleteIcon from '@mui/icons-material/Delete';
import { createPortal } from 'react-dom';
import usePortal from './customHooks/usePortal';

type InlineMoreMenuType = {
    targetId: string;
}

const InlineMoreMenu = ({targetId}: InlineMoreMenuType) => {
    const target = usePortal(targetId);
    const menuComponent = (
        <>
            <DeleteIcon />
            Delete Card
        </>
    )
    return createPortal(menuComponent, target);
}

export default InlineMoreMenu;